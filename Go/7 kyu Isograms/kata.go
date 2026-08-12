/* An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Examples:
IsIsogram("Dermatoglyphics") -> true
IsIsogram("aba") -> false
IsIsogram("moOse") -> false (ignore letter case)
*/

// My solution

package kata

import "strings"

func IsIsogram(s string) bool {
	seen := make(map[rune]bool)
	for _, r := range strings.ToLower(s) {
		if seen[r] {
			return false
		}
		seen[r] = true
	}
	return true
}
