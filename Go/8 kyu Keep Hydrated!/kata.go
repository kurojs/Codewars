/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

// My solution

package kata

import "math"

func Litres(time float64) int {
	litros := time * 0.5
	intLitros := math.Floor(litros)
	return int(intLitros)
}
