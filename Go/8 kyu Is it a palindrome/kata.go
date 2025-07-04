/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols
that reads the same backwards as forwards, such as madam or racecar.
*/

// Solution

package kata

import "strings"

func IsPalindrome(str string) bool {
	str = strings.ToLower(str)
	reversed := ""

	for i := len(str) - 1; i >= 0; i-- {
		reversed += string(str[i])
	}

	return str == reversed
}
