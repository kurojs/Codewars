# Write a function taking in a string like WOW this is REALLY          amazing and returning Wow this is really amazing. String should be capitalized and properly spaced.
# Examples:
# "HELLO CAN YOU HEAR ME" --> "Hello can you hear me"
# "now THIS is REALLY interesting" --> "Now this is really interesting"
# "THAT was EXTRAORDINARY!" --> "That was extraordinary!"

# Solution

def filter_words(st):
    st = st.lower()
    words = st.split()
    words[0] = words[0].capitalize()
    result = ' '.join(words)
    return result
