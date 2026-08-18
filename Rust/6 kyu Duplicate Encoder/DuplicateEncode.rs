// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Solution

use std::collections::HashMap;

fn duplicate_encode(word: &str) -> String {
    let lower: String = word.chars().map(|c| c.to_lowercase().next().unwrap()).collect();
    let mut counts = HashMap::new();
    for c in lower.chars() {
        *counts.entry(c).or_insert(0) += 1;
    }
    lower.chars()
        .map(|c| if counts[&c] > 1 { ')' } else { '(' })
        .collect()
}
