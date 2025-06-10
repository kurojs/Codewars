/*
For "x", determine how many positive integers less than or equal to "x" are odd but not prime.
Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2
*/

// My solution

bool isPrime(unsigned int num) {
    if (num <= 1) { 
        return false;
    }
    if (num <= 3) { 
        return true;
    }
    if (num % 2 == 0 || num % 3 == 0) {
        return false;
    }

    for (unsigned int i = 5; i * i <= num; i = i + 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false; 
        }
    }
    return true; 
}

unsigned int oddNotPrime(unsigned int n) {
    int sum = 0;

    if (n >= 1) { 
        sum = 1; 
    }

    for (unsigned int i = 3; i <= n; i += 2) {
        if (!isPrime(i)) {
            sum++;
        }
    }
    
    return sum;
}
