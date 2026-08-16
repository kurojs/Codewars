// You are going to be given a word. Your job is to return the middle character
// of the word. If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// Examples:
// get_middle("test") should return "es"
// get_middle("testing") should return "t"
// get_middle("middle") should return "dd"
// get_middle("A") should return "A"

// Solution

fn get_middle(s: &str) -> &str {
    let bytes = s.as_bytes();
    let mid = bytes.len() / 2;
    if bytes.len() % 2 == 0 {
        &s[mid - 1..mid + 1]
    } else {
        &s[mid..mid + 1]
    }
}
