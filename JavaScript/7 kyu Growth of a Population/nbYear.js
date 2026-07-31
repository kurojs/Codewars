/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.

How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

More generally: given p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass), the function nbYear should return the number of whole years needed to reach at least p.

Examples:

nbYear(1500, 5, 100, 5000)   // returns 15
nbYear(1500000, 2.5, 10000, 2000000) // returns 10
nbYear(1500000, 0.25, 1000, 2000000) // returns 94
*/

// Solution

function nbYear(p0, percent, aug, p) {
  let years = 0;
  let population = p0;

  while (population < p) {
    population += Math.floor(population * (percent / 100)) + aug;
    years++;
  }

  return years;
}
