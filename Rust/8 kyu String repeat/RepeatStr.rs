// Write a function that accepts a non-negative integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Solution

fn repeat_str(src: &str, count: usize) -> String {
    src.repeat(count)
}
