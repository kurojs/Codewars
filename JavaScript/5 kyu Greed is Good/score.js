/*
Greed is a dice game played with five six-sided dice.
Your mission is to score a throw according to these rules:

- Three 1s => 1000 points
- Three 6s => 600 points
- Three 5s => 500 points
- Three 4s => 400 points
- Three 3s => 300 points
- Three 2s => 200 points
- One 1 => 100 points
- One 5 => 50 points

A single die can only be counted once in each event. 
For example, a given "5" can only count as part of a triplet 
(contributing 500) or as a single 50 points, but not both in the same roll.

Example:
score([5, 1, 3, 4, 1]); // expected result: 250 (50 + 100 + triplet of 1s)
score([1, 1, 1, 3, 1]); // expected result: 1100 (triplet of 1s + 100)
score([2, 4, 4, 5, 4]); // expected result: 450 (triplet of 4s + 50)

Notes:
- The input array will always contain exactly 5 dice values (0-6 each).
- The function should return the total score.
*/

// Solution

function score(dice) {
  const counts = [0, 0, 0, 0, 0, 0, 0];
  let total = 0;

  for (const die of dice) {
    counts[die]++;
  }

  // Triplet scoring
  if (counts[1] >= 3) {
    total += 1000;
    counts[1] -= 3;
  }
  if (counts[6] >= 3) {
    total += 600;
    counts[6] -= 3;
  }
  if (counts[5] >= 3) {
    total += 500;
    counts[5] -= 3;
  }
  if (counts[4] >= 3) {
    total += 400;
    counts[4] -= 3;
  }
  if (counts[3] >= 3) {
    total += 300;
    counts[3] -= 3;
  }
  if (counts[2] >= 3) {
    total += 200;
    counts[2] -= 3;
  }

  // Single scoring
  total += counts[1] * 100;
  total += counts[5] * 50;

  return total;
}