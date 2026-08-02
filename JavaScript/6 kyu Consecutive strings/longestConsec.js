/*
You are given an array of strings strarr and an integer k.
Your task is to return the first longest string consisting of k 
consecutive strings taken in the array.

Example:
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); // expected result: "abigailtheta"
longestConsec(["ejjjjmmtthh", "zxxuueeg", "andrrhbaae", "ioertrhnb", "olmtdktehh"], 3); // expected result: "ioertrhnbolmtdktehh"

Notes:
- n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
- The input array will always contain strings.
*/

// Solution

function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) return "";

  let longest = "";

  for (let i = 0; i <= n - k; i++) {
    const current = strarr.slice(i, i + k).join("");
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}