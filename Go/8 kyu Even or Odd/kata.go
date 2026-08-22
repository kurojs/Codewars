/* Create a function that takes an integer as an argument and returns
"Even" for even numbers or "Odd" for odd numbers.

Examples:
evenOrOdd(2) -> "Even"
evenOrOdd(7) -> "Odd"
*/

// My solution

package kata

func EvenOrOdd(n int) string {
	if n%2 == 0 {
		return "Even"
	}
	return "Odd"
}
