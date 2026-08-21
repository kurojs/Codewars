/*
You are going to be given a word. Your job is to return the middle character
of the word. If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

Examples:
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
*/

// Solution

function getMiddle(string $s): string {
    $mid = intdiv(strlen($s), 2);
    if (strlen($s) % 2 === 0) {
        return substr($s, $mid - 1, 2);
    }
    return substr($s, $mid, 1);
}
