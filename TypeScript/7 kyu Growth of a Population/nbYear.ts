/*
In a small town the population is p0 = 1000 at the beginning of a year.
The population regularly increases by 2 percent per year and moreover
50 new inhabitants per year come to live in the town.

How many years does the town need to see its population greater or equal
to p = 1200 inhabitants?

More generally given parameters:
- p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
- the function nbYear should return n number of entire years needed to
  get a population greater or equal to p.
- aug is an integer, percent a positive or null floating number, p0 and p
  are positive integers (> 0)

Examples:
nbYear(1500, 5, 100, 5000) => 15
nbYear(1500000, 2.5, 10000, 2000000) => 10
nbYear(1000, 2.0, 50, 1200) => 3

Notes:
- Don't forget to convert the percent parameter as a percentage in the body
  of your function: if the parameter percent is 2 you need to convert it to 0.02.
- Population is a whole number each year, so round down.
*/

// Solution

export function nbYear(p0: number, percent: number, aug: number, p: number): number {
  let population = p0;
  let years = 0;

  while (population < p) {
    population = Math.floor(population * (1 + percent / 100) + aug);
    years++;
  }

  return years;
}