# Your task is to return the number of visible dots on a die after it has been rolled(that means the total count of dots that would not be touching the table when rolled)
# 6, 8, 10, 12, 20 sided dice are the possible inputs for "numOfSides"
# topNum is equal to the number that is on top, or the number that was rolled.
# for this exercise, all opposite faces add up to be 1 more than the total amount of sides Example:
# 6 sided die would have 6 opposite 1, 4 opposite 3, and so on. for this exercise, the 10 sided die starts at 1 and ends on 10.
# Note: topNum will never be greater than numOfSides

# Solution

def total_amount_visible(top_num, num_of_sides):
    bottom_num = num_of_sides + 1 - top_num
    total_sum = num_of_sides * (num_of_sides + 1) // 2
    return total_sum - bottom_num
