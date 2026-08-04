/*
Write a function, which takes a non-negative integer (seconds) as input
and returns the time in a human-readable format (HH:MM:SS).

- HH = hours, padded to 2 digits, range: 00 - 99
- MM = minutes, padded to 2 digits, range: 00 - 59
- SS = seconds, padded to 2 digits, range: 00 - 59
- The maximum time never exceeds 359999 (99:59:59)

Examples:
humanReadable(0) => "00:00:00"
humanReadable(59) => "00:00:59"
humanReadable(60) => "00:01:00"
humanReadable(90) => "00:01:30"
humanReadable(359999) => "99:59:59"

Notes:
- The input seconds is always a non-negative integer.
- The output must always be exactly 8 characters long.
*/

// Solution

export function humanReadable(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (n: number): string => String(n).padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}