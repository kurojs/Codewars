/*
The prime factorization of a positive integer is a list of the integer's prime factors, together with their multiplicities;
the process of determining these factors is called integer factorization.
The fundamental theorem of arithmetic says that every positive integer has a single unique prime factorization.

The prime factorization of 24, for instance, is (2^3) * (3^1).

Write a class called PrimeFactorizer whose constructor takes no arguments and has an instance method factor accepting exactly 1
long which returns a Map<Long, Integer> where the keys are prime numbers and the values are the multiplicities.

new PrimeFactorizer().factor(24) //should return { 2 => 3, 3 => 1 }
*/

import java.util.*;

public class PrimeFactorizer {

    public java.util.Map<Long, Integer> factor(long n) {
        Map<Long, Integer> result = new LinkedHashMap<>();

        for (long i = 2; i * i <= n; i++) {
            while (n % i == 0) {
                result.put(i, result.getOrDefault(i, 0) + 1);
                n /= i;
            }
        }

        if (n > 1) {
            result.put(n, 1);
        }

        return result;
    }
}
