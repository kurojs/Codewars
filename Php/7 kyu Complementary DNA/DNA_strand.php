/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell);
you need to get the other complementary side. DNA strand is never empty.

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// Solution

function DNA_strand(string $dna): string {
    $complement = ['A' => 'T', 'T' => 'A', 'C' => 'G', 'G' => 'C'];
    return implode('', array_map(fn($base) => $complement[$base], str_split($dna)));
}
