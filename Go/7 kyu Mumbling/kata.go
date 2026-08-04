/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// My solution

package kata

import "strings"

func Accum(s string) string {
	var sb strings.Builder
	for i, r := range s {
		if i > 0 {
			sb.WriteString("-")
		}
		sb.WriteString(strings.ToUpper(string(r)))
		sb.WriteString(strings.Repeat(strings.ToLower(string(r)), i))
	}
	return sb.String()
}
