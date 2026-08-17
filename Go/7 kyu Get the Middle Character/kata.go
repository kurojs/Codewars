/* You are going to be given a word. Your job is to return the middle character
of the word. If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

Examples:
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
*/

// My solution

package kata

func GetMiddle(s string) string {
	mid := len(s) / 2
	if len(s)%2 == 0 {
		return s[mid-1 : mid+1]
	}
	return s[mid : mid+1]
}
