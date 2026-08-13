# In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
# You have function with one side of the DNA (string, except for Haskell);
# you need to get the other complementary side. DNA strand is never empty.

# Example: (input --> output)
# "ATTGC" --> "TAACG"
# "GTAT" --> "CATA"

# My solution

def DNA_strand(dna):
    complement = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
    return ''.join(complement[base] for base in dna)
