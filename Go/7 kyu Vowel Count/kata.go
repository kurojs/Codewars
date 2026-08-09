/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this kata (but not y).
The input string will only consist of lower case letters and/or spaces.

Example:
"abracadabra" -> 5
*/

// My solution

package kata

func GetCount(str string) (count int) {
	vowels := map[rune]bool{'a': true, 'e': true, 'i': true, 'o': true, 'u': true}
	for _, r := range str {
		if vowels[r] {
			count++
		}
	}
	return count
}
