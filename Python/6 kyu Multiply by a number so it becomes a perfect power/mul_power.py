# Task

# Let's say we have a positive integer, nnn.
# You have to find the smallest possible positive integer that when multiplied by nnn,
# becomes a perfect power of integer kkk.
# A perfect power of kkk is any positive integer that can be represented as aka^kak.
# For example if k=2k = 2k=2, then 363636 is a perfect power of kkk, but 272727 isn't.
# Examples

# n, k = 100, 3  return  10, #because 10*100 becomes 1000, and 1000 = 10**3
# n, k = 36, 2   return   1, #because 36 is already a perfect square 6**2
# n, k = 72, 4   return  18, #because 18*72 = 1296 = 6**4

# Notes:

#    k,n∈Nk, n \in \mathbb{N} k,n∈N and 1<n<106, 1<k<10 1 \lt n \lt 10^6,\text{ } 1 \lt k \lt 10 1<n<106, 1<k<10
#    However, the output may be way larger than 10610^6106.

# If you have trouble seeing the numbers, refresh your page ;-) Please rate this kata. All translations are welcome.

# Solution

from math import gcd
from collections import Counter

def prime_factors(x):
    i = 2
    factors = Counter()
    while i * i <= x:
        while x % i == 0:
            factors[i] += 1
            x //= i
        i += 1
    if x > 1:
        factors[x] += 1
    return factors

def mul_power(n, k):
    factors = prime_factors(n)
    result = 1
    for p, exp in factors.items():
        add = (k - exp % k) % k
        result *= p ** add
    return result

