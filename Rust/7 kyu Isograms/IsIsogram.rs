// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Examples:
// is_isogram("Dermatoglyphics") -> true
// is_isogram("aba") -> false
// is_isogram("moOse") -> false (ignore letter case)

// Solution

fn is_isogram(s: &str) -> bool {
    let mut seen = std::collections::HashSet::new();
    s.chars()
        .flat_map(|c| c.to_lowercase())
        .all(|c| seen.insert(c))
}
