/*
Is a Prime?

Just your usual prime kata.. with some unknown restrictions.. Good luck!

This kata requires a lot of guess work so try and try again. :)
Note: You may not have any loops

*/

// Solution

function isPrime(str) {
  if (!str || typeof str !== "string") return false;

  const words = str.split(/\W+/);

  const primeWords = [
    "prime",
    "two",
    "three",
    "five",
    "seven",
    "eleven",
    "thirteen",
  ];

  const hasPrimeWord = words.some((word) =>
    primeWords.some((p) => word.toLowerCase().includes(p)),
  );

  const numbers = str.match(/\d+/g);
  const hasPrimeNumber =
    numbers &&
    numbers.some((numStr) => {
      const n = Number(numStr);
      if (n < 2) return false;
      if (n === 2) return true;
      if (n % 2 === 0) return false;

      const checkDivisor = (divisor) => {
        if (divisor * divisor > n) return true;
        if (n % divisor === 0) return false;
        return checkDivisor(divisor + 2);
      };

      return checkDivisor(3);
    });

  return Boolean(hasPrimeWord || hasPrimeNumber);
}
