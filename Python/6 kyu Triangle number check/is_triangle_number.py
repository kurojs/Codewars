# Description:

# A triangle number n is an integer such that n objects can be arranged into an equilateral triangle.
 
# For example, 6 is a triangle number because you can arrange 6 objects into an equilateral triangle:

#   1
#  2 3
# 4 5 6

# 8 is not a triangle number because 8 objects do not form an equilateral triangle:

#    1
#   2 3
#  4 5 6
# 7 8

# In other words, the nth triangle number is equal to the sum of the n natural numbers from 1 to n.
# Your task:

# Your function takes a positive integer n in parameter and returns whether n is a triangular number, as a boolean.

# You are encouraged to develop an effective algorithm: test cases include really big numbers.
# Notes:

# 0 and 1 are triangle numbers.

# Solution

def is_triangle_number(number: int) -> bool:
    if number < 0:
        return False
    x = 8 * number + 1
    root = int(x**0.5)
    return root * root == x
