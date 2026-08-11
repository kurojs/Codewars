// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution

fn accum(s: &str) -> String {
    s.chars()
        .enumerate()
        .map(|(i, c)| {
            let upper: String = c.to_uppercase().collect();
            let lower: String = c.to_lowercase().collect();
            format!("{}{}", upper, lower.repeat(i))
        })
        .collect::<Vec<String>>()
        .join("-")
}
