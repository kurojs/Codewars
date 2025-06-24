/*
	Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
	Example (Input => Output):

	35231 => [1,3,2,5,3]
	0     => [0]
*/

// Solution

package kata

func Digitize(n int) []int {
	if n == 0 {
		return []int{0}
	}

	var result []int
	for n > 0 {
		result = append(result, n%10)
		n /= 10
	}
	return result
}
