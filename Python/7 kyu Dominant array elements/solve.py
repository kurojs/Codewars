# an element in an array is dominant if it is greater than all elements to its right.
# you will be given an array and your task will be to return a list of all dominant elements.
# for example:

# solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
# solve([5,4,3,2,1]) = [5,4,3,2,1]

# notice that the last element is always included. all numbers will be greater than 0.

# more examples in the test cases.

# solution

def solve(arr):
    result = []
    max_from_right = float('-inf')
    for num in reversed(arr):
        if num > max_from_right:
            result.append(num)
            max_from_right = num
    return result[::-1]
