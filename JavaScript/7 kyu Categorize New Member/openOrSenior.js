/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open.

To be a senior, a member must be at least 55 years old and have a handicap 
greater than 7. In this croquet club, handicaps range from -2 to +26.

Given a list of members, where each member is [age, handicap], return a list 
of strings indicating whether the member is "Senior" or "Open".

Example:
openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]); // expected result: ["Open", "Senior", "Open", "Senior"]
openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]); // expected result: ["Open", "Open", "Open", "Open"]

Notes:
- The input will always be a valid list of [age, handicap] pairs.
- Age is a positive integer.
- Handicap is an integer between -2 and 26.
*/

// Solution

function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    return age >= 55 && handicap > 7 ? "Senior" : "Open";
  });
}