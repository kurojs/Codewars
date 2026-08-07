// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Example:
// "abracadabra" -> 5

// Solution

fn get_count(string: &str) -> usize {
    string
        .chars()
        .filter(|c| matches!(c, 'a' | 'e' | 'i' | 'o' | 'u'))
        .count()
}
