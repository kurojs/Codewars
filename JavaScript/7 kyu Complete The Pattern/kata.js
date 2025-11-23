/*
You have to write a function which creates the following pattern (See Examples)
upto desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
Examples:

Argument: 9

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678

Argument: 11

1234567891011
2345678910111
3456789101112
4567891011123
5678910111234
6789101112345
7891011123456
8910111234567
9101112345678
1011123456789
1112345678910

Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line
*/

// Solution

function pattern(n) {
  if (n <= 0) return "";
  let lines = [];
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      line += ((i + j) % n) + 1;
    }
    lines.push(line);
  }
  return lines.join("\n");
}
