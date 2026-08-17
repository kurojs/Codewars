/*
Your task is to make a function that can take any non-negative integer as an argument
and return it with its digits in descending order. Essentially, rearrange the digits
to create the highest possible number.

Examples:
42145 --> 54421
145263 --> 654321
123456789 --> 987654321
*/

// Solution

function descendingOrder(int $num): int {
    $digits = str_split((string) $num);
    rsort($digits);
    return (int) implode('', $digits);
}
