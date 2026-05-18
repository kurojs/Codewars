/*
The function is supposed to convert a floating-point number to a string, 
but it is not working correctly. Can you figure out why ?

Converting the string back to a floating-point number should yield
the original number (this is called a round-trip).
*/ 

// SOLUTION

package kata

import "strconv"

func FloatToString(x float64) string {
    return strconv.FormatFloat(x, 'f', -1, 64)
}


