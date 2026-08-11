/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Example:
"abracadabra" -> 5
*/

// Solution

function getCount(string $str): int {
    return substr_count($str, 'a')
        + substr_count($str, 'e')
        + substr_count($str, 'i')
        + substr_count($str, 'o')
        + substr_count($str, 'u');
}
