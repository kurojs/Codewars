/*
Making Change

Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols/strings H, Q, D, N and P.

The argument passed in will be an integer representing the value in cents. The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.
Examples

input = 0  => output = {}
input = 1  => output = {'P': 1}
input = 43 => output = {'Q': 1, 'D': 1, 'N': 1, 'P': 3}
input = 91 => output = {'H': 1, 'Q': 1, 'D': 1, 'N': 1, 'P': 1}
*/

// Solution

const makeChange = (amount) => {
  const coins = { H: 50, Q: 25, D: 10, N: 5, P: 1 };

  let result = {};

  for (let coin in coins) {
    let count = Math.floor(amount / coins[coin]);
    if (count > 0) {
      result[coin] = count;
      amount = amount % coins[coin];
    }
  }

  return result;
};
