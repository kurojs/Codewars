/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is listed on the last position which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1. So in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers.

Examples:

orderWeight("103 123 4444 99 2000")      // returns "2000 103 123 4444 99"
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123") // returns "11 11 2000 10003 22 123 1234000 44444444 9999"
*/

// Solution

function orderWeight(str) {
  const weight = (n) => n.split("").reduce((sum, d) => sum + parseInt(d), 0);

  return str
    .split(" ")
    .sort((a, b) => {
      const wA = weight(a);
      const wB = weight(b);

      if (wA !== wB) return wA - wB;
      return a.localeCompare(b);
    })
    .join(" ");
}
