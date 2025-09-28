# A new task has come up in your team. An internal system needs to be able to check
# whether a number is a palindrome or not. You have been assigned the task to write
# the function, while the senior software engineer Bob wrote the tests.
# But when you try to write the function, you can't make it pass the tests as you expect!
# And worse still, Bob has gone on holiday! Maybe he slightly changed the meaning of "palindrome"
# in this task? Can you work out how to make the function work correctly? 
# Examples
# 585  -->  True 
# 1497  -->  False
# 891  -->  True 
# 1001  -->  False
# Bob said it should work for really really big numbers.
# Good luck!

# Solution

def is_palindrome(n: int) -> bool:
    binary_string = bin(n)[2:]
    return binary_string == binary_string[::-1]
