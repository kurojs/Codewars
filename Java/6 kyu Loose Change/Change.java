// Welcome young Jedi!

// In this Kata, you must create a function that takes an amount of US currency in cents,
// and returns a dictionary/hash which shows the least amount of coins used to make up that amount.

// The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢)
// and Quarters (25¢).

// Therefore, the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

//     If the function is passed either 0 or a negative number,
//     the function should return the dictionary with all values equal to 0.
//     If a float is passed into the function, its value should be rounded down,
//     and the resulting dictionary should never contain fractions of a coin.

// Examples

// 56    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// -435  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// 4.935 ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

// Solution

import java.util.HashMap;

public class Change {
	public static HashMap<String, Integer> looseChange(int cent) {
		HashMap<String, Integer> map = new HashMap<>();
		map.put("Pennies", 0);
		map.put("Nickels", 0);
		map.put("Dimes", 0);
		map.put("Quarters", 0);
		
    if (cent <= 0) { return map; }
    
    int remaining = (int) Math.floor(cent);

    map.put("Quarters", remaining / 25);
    remaining %= 25;

    map.put("Dimes", remaining / 10);
    remaining %= 10;

    map.put("Nickels", remaining / 5);
    remaining %= 5;

    map.put("Pennies", remaining);

    return map;

	}
}

