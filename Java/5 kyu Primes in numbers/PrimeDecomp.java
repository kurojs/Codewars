/* Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

// My solution

public class PrimeDecomp {
    public static String factors(int n) {
        StringBuilder resultado = new StringBuilder();
        int count = 0;
        
        while (n % 2 == 0) {
            n /= 2;
            count++;
        }
        if (count > 0) {
            resultado.append("(2");
            if (count > 1) resultado.append("**").append(count);
            resultado.append(")");
        }
        
        for (int i = 3; i <= Math.sqrt(n); i += 2) {
            count = 0;
            while (n % i == 0) {
                n /= i;
                count++;
            }
            if (count > 0) {
                resultado.append("(").append(i);
                if (count > 1) resultado.append("**").append(count);
                resultado.append(")");
            }
        }
        
        if (n > 1) {
            resultado.append("(").append(n).append(")");
        }
        
        return resultado.toString();
    }
}

