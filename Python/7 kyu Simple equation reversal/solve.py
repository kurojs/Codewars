# Given a mathematical equation that has *,+,-,/, reverse it as follows:

# solve("100*b/y") = "y/b*100"
# solve("a+b-c/d*30") = "30*d/c-b+a"

# More examples in test cases.

# Good luck!

# Solution

import re

def solve(eq):
    parts = re.split(r'(\+|\-|\*|\/)', eq)
    invert = parts[::-1]
    result = "".join(invert)
    return result
