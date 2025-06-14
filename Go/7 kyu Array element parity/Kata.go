/*
In this Kata, you will be given an array of integers whose elements have both a negative
and a positive value, except for one integer that is either only negative or only positive.
Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!
*/

// Solution

package kata

func Solve(arr []int) int {
	seen := make(map[int]bool)
	for _, num := range arr {
		seen[num] = true
	}

	for _, num := range arr {
		if !seen[-num] {
			return num
		}
	}

	return 0
}
