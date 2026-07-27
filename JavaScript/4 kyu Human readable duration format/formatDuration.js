/*
Your task in order to complete this Kata is to write a function which formats a duration, 
given as a number of seconds, into a string.

The function must always return a non-empty string.
The function must return "now" if the input is 0.

Example:
formatDuration(62); // expected result: "1 minute and 2 seconds"
formatDuration(3662); // expected result: "1 hour, 1 minute and 2 seconds"

The units of time are:
- 1 year = 31536000 seconds
- 1 day = 86400 seconds
- 1 hour = 3600 seconds
- 1 minute = 60 seconds
- 1 second = 1 second

The format of the returned string:
- The components are separated by a comma and a space (", ").
- The last component is separated by " and ".
- There is no comma before "and" when there are only two components.
- Only non-zero components are included.
- The function should handle singular and plural forms correctly.

Notes:
- The input will always be a non-negative integer.
- The maximum input value is 31536000 * 10 (10 years).
*/

// Solution

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const units = [
    { name: "year", duration: 31536000 },
    { name: "day", duration: 86400 },
    { name: "hour", duration: 3600 },
    { name: "minute", duration: 60 },
    { name: "second", duration: 1 },
  ];

  const parts = [];

  for (const unit of units) {
    if (seconds >= unit.duration) {
      const count = Math.floor(seconds / unit.duration);
      parts.push(`${count} ${unit.name}${count > 1 ? "s" : ""}`);
      seconds %= unit.duration;
    }
  }

  if (parts.length === 1) return parts[0];

  const last = parts.pop();
  return parts.join(", ") + " and " + last;
}