/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell);
you need to get the other complementary side. DNA strand is never empty.

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// My solution

package kata

func DNAStrand(dna string) string {
	complement := map[rune]rune{
		'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C',
	}
	result := make([]rune, len(dna))
	for i, base := range dna {
		result[i] = complement[base]
	}
	return string(result)
}
