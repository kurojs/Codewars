/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// Solution

function accum(string $s): string {
    $result = [];
    foreach (str_split($s) as $i => $char) {
        $result[] = strtoupper($char) . str_repeat(strtolower($char), $i);
    }
    return implode('-', $result);
}
