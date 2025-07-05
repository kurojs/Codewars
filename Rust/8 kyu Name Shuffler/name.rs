// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// Solution

fn name_shuffler(s: &str) -> String {
    let split: Vec<&str> = s.split_whitespace().collect();
    return if split.len() == 2 {
        format!("{} {}", split[1], split[0])
    } else {
        s.to_string() 
    };
}
