/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

// Solution

package kata

import (
	"strconv"
	"strings"
)

func Calc(s string) int {
	var total1Builder strings.Builder
	for _, char := range s {
		total1Builder.WriteString(strconv.Itoa(int(char)))
	}
	total1 := total1Builder.String()

	total2 := strings.ReplaceAll(total1, "7", "1")

	sumDigits := func(s string) int {
		sum := 0
		for _, char := range s {
			sum += int(char - '0')
		}
		return sum
	}

	sum1 := sumDigits(total1)
	sum2 := sumDigits(total2)

	return sum1 - sum2
}
