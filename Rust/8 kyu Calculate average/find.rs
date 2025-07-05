// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// Solution

fn find_average(slice: &[f64]) -> f64 {
    return if slice.is_empty() {
        0.0
    } else {
        slice.iter().sum::<f64>() / slice.len() as f64
    };
}
