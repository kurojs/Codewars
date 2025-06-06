# Objective
# Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.
# Write a function that takes n and finds it's scORe.
# n 	scORe n
# 0 	0
# 1 	1
# 49 	63
# 1000000 	1048575
# Any feedback would be much appreciated

# My solution

def score(n):
    res = 1
    while res <= n:
        res <<= 1
    return res - 1
