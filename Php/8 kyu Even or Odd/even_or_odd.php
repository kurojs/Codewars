/*
Create a function that takes an integer as an argument and returns
"Even" for even numbers or "Odd" for odd numbers.

Examples:
even_or_odd(2) -> "Even"
even_or_odd(7) -> "Odd"
even_or_odd(-42) -> "Even"
*/

// Solution

function even_or_odd(int $number): string {
    return $number % 2 === 0 ? 'Even' : 'Odd';
}
