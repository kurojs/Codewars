# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

# Example:
# "abracadabra" -> 5

# My solution

def get_count(sentence):
    vowels = "aeiou"
    return sum(1 for char in sentence if char in vowels)
