/* In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.

Examples:
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
- All numbers are valid Int32, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.
*/

// My solution

package kata

import (
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	fields := strings.Fields(in)

	max, _ := strconv.Atoi(fields[0])
	min := max

	for _, f := range fields[1:] {
		n, _ := strconv.Atoi(f)
		if n > max {
			max = n
		}
		if n < min {
			min = n
		}
	}

	return strconv.Itoa(max) + " " + strconv.Itoa(min)
}
