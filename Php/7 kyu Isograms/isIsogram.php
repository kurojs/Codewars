/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.

Implement a function that determines whether a string that contains
only letters is an isogram. Assume the empty string is an isogram.
Ignore letter case.

Example:
isIsogram("Dermatoglyphics") -> true
isIsogram("aba") -> false
isIsogram("moOse") -> false
*/

// Solution

function isIsogram(string $str): bool {
    $lower = strtolower($str);
    return strlen($lower) === count(array_unique(str_split($lower)));
}
