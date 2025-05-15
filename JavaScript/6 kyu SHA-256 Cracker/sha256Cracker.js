/* This kata aims to show the vulnerabilities of hashing functions for short messages.

When provided with a SHA-256 hash, return the value that was hashed. You are also given the characters 
that make the expected value, but in alphabetical order.

The returned value is less than 10 characters long. 
Return nil for Ruby and Crystal, None for Python, null for for Java and Javascript 
when the hash cannot be cracked with the given characters.
Example:

Example arguments: '5694d08a2e53ffcae0c3103e5ad6f6076abd960eb1f8a56577040bc1028f702b', 'cdeo'
Correct output: 'code'
*/

// My solution


const crypto = require("crypto");

function sha256Cracker(hash, chars) {
  function* permute(str, prefix = "") {
    if (prefix.length > 0 && prefix.length <= 9) yield prefix;
    if (str.length === 0 || prefix.length >= 9) return;

    for (let i = 0; i < str.length; i++) {
      yield* permute(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
    }
  }

  for (const candidate of permute(chars)) {
    const hashed = crypto.createHash("sha256").update(candidate).digest("hex");
    if (hashed === hash) return candidate;
  }

  return null;
}

