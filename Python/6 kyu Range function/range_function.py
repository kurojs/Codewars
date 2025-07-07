# Create range generator function that will take up to 3 parameters - start value, step and stop value.
# This function should return an iterable object with numbers.
# For simplicity, assume all parameters to be positive numbers.

# Examples:

#    range(5) --> 1,2,3,4,5
#    range(3, 7) --> 3,4,5,6,7
#    range(2, 3, 15) --> 2,5,8,11,14

# Solution

def range_function(*args):
    if len(args) == 1:
        start, step, stop = 1, 1, args[0]
    elif len(args) == 2:
        start, step, stop = args[0], 1, args[1]
    else:
        start, step, stop = args
    current = start
    while current <= stop:
        yield current
        current += step

