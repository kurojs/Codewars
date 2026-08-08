// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

// Examples:
// 2 -> "Even"
// 7 -> "Odd"
// -42 -> "Even"

// Solution

fn even_or_odd(number: i32) -> &'static str {
    if number % 2 == 0 {
        "Even"
    } else {
        "Odd"
    }
}
