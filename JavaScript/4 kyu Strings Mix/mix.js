/*
Given two strings s1 and s2, we want to visualize how different the two strings are.
We will only take into account the lowercase letters (a to z).

For each lowercase letter that appears in both strings, we count its occurrences 
in each string and we say that it belongs to the string with the higher count 
(the max count). If both counts are equal, the letter belongs to "=".

A letter only belongs to a string if it appears at least once in BOTH strings.

The result is a list of groups, one per letter, in the format:
- "1:aaa" if the letter belongs to s1 (where "aaa" is the letter repeated by its count)
- "2:bbb" if the letter belongs to s2
- "=:ccc" if the count is equal in both strings

The groups are ordered by:
1. Decreasing length of the group
2. Lexicographic order of the prefix (1:, 2:, =:)
3. Lexicographic order of the letter

Example:
mix("Are they here", "yes, they are here"); 
// expected result: "2:eeeee/2:yy/=:hh/=:rr"

Notes:
- The input strings will always be lowercase or have uppercase mixed.
- Uppercase letters are ignored (converted to lowercase first).
- Only letters that appear in both strings are considered.
*/

// Solution

function mix(s1, s2) {
  const count = (s) => {
    const map = {};
    for (const char of s.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        map[char] = (map[char] || 0) + 1;
      }
    }
    return map;
  };

  const map1 = count(s1);
  const map2 = count(s2);

  const letters = new Set([...Object.keys(map1), ...Object.keys(map2)]);
  const groups = [];

  for (const letter of letters) {
    const c1 = map1[letter] || 0;
    const c2 = map2[letter] || 0;
    if (c1 <= 1 && c2 <= 1) continue;

    let prefix;
    const max = Math.max(c1, c2);
    if (c1 > c2) prefix = "1";
    else if (c2 > c1) prefix = "2";
    else prefix = "=";

    groups.push(`${prefix}:${letter.repeat(max)}`);
  }

  groups.sort((a, b) => {
    if (a.length !== b.length) return b.length - a.length;
    if (a[0] !== b[0]) return a[0].localeCompare(b[0]);
    return a[2].localeCompare(b[2]);
  });

  return groups.join("/");
}