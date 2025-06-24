# Write a function which takes in a lowercase word and applies our version of the "I before E except after C" rule.
# Examples

# "freind" --> "friend"
# "friend" --> "friend"
# "recieve" --> "receive"

# You'll also need to account for the weirder cases that may not exist in real English words.

# "eeiie" --> "iieee"
# "cieee" --> "ceeei"
# "eiicieeceie" --> "iieceeiceei"

# Solution

def i_before_e(s):
    s = list(s)
    i = 0

    while i < len(s) - 1:
        if s[i] == 'e' and s[i + 1] == 'i':
            if i > 0 or s[i - 1] != 'c':
                s[i], s[i + 1] = 'i', 'e'
                i = max(i - 2, 0)
                    continue
            elif s[i] == 'i' and s[i + 1] == 'e':
                if i > 0 and s[i - 1] == 'c':
                    s[i], s[i + 1] = 'e', 'i'
                    i = max(i - 2, 0)
                        continue
                i += 1
            return ''.join(s)
