/* The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

// My solution

package kata

import "strings"

func DuplicateEncode(word string) string {
	word = strings.ToLower(word)
	counts := make(map[rune]int)
	for _, r := range word {
		counts[r]++
	}
	var result strings.Builder
	for _, r := range word {
		if counts[r] > 1 {
			result.WriteRune(')')
		} else {
			result.WriteRune('(')
		}
	}
	return result.String()
}
