// Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially, rearrange the digits
// to create the highest possible number.

// Examples:
// 42145 --> 54421
// 145263 --> 654321
// 123456789 --> 987654321

// Solution

fn descending_order(x: u64) -> u64 {
    let mut digits: Vec<char> = x.to_string().chars().collect();
    digits.sort_by(|a, b| b.cmp(a));
    digits.into_iter().collect::<String>().parse().unwrap()
}
