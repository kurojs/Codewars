# Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

# You need to consider the following ratings:

#    Terrible: tip 0%
#    Poor: tip 5%
#    Good: tip 10%
#    Great: tip 15%
#    Excellent: tip 20%

# The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

#    "Rating not recognised" in Javascript, Python and Ruby...
#    ...or null in Java
#    ...or -1 in C#

#Because you're a nice person, you always round up the tip, regardless of the service.

# Solution

import math

def calculate_tip(amount, rating):
    ratings = {
        "terrible": 0,
        "poor": 0.05,
        "good": 0.10,
        "great": 0.15,
        "excellent": 0.20
    }
    
    rating_lower = rating.lower()
    
    if rating_lower not in ratings:
        return "Rating not recognised"
    
    tip = amount * ratings[rating_lower]
    return math.ceil(tip)
