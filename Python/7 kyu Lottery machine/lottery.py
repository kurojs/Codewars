# Your task is to write an update for a lottery machine.
# Its current version produces a sequence of random letters and integers
# (passed as a string to the function).
# Your code must filter out all letters and return unique integers as a string,
# in their order of first appearance.
# If there are no integers in the string return "One more run!"
# Examples

# "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
# "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
# "555"                   -->  "5"

# Solution

def lottery(s):
    unique_digits = []

    for char in s:
        if char.isdigit() and char not in unique_digits:
            unique_digits.append(char)

            if unique_digits == ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']:
                return ''.join(unique_digits)
            else:
                return 'ONe more run!'
