/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]

All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/

// My solution

public class Reduce {

    public static int[] myFraction(int[] fractions) {
        int numerator = fractions[0];
        int denominator = fractions[1];
        int gcd = gcd(numerator, denominator);

        return new int[] { numerator / gcd, denominator / gcd };
    }

    private static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
