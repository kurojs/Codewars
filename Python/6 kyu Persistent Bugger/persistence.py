# Write a function, persistence, that takes in a positive parameter num
# and returns its multiplicative persistence, which is the number of times
# you must multiply the digits in num until you reach a single digit.

# Examples:
# persistence(39) === 3  # because 3*9 = 27, 2*7 = 14, 1*4 = 4
# persistence(999) === 4 # because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, 1*2 = 2
# persistence(4) === 0   # because 4 is already a one-digit number

# My solution

def persistence(n):
    count = 0
    while n >= 10:
        product = 1
        while n > 0:
            product *= n % 10
            n //= 10
        n = product
        count += 1
    return count
