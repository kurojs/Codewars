/*
Google often returns latitude and longitude coordinates in comma separated format,
with cardinal directions insteadof positive and negative values.

Create a method that takes a string of input, (e.g., "33.4489 S, 70.6693 W"), and returns an array
of two elements: the latitude and longitude values (e.g., [-33.4489, -70.6693] or [70.134, 40])

Inputs will always be comma separated, positive numbers, can include floats or whole numbers,
with or without cardinal direction letters (N, E, S, and W). Assume positive values when no cardinal direction is specified.

Inputs could have weird spacing, e.g., " 10.22    E, 72.1  N   "

S (South) and W (West) should be converted to negative values.
*/

// Solution

function latLng(raw) {
  return raw.split(",").map((coord, index) => {
    const value = Math.abs(parseFloat(coord));
    const isNegativeDirection =
      (index === 0 && coord.toUpperCase().includes("S")) ||
      (index === 1 && coord.toUpperCase().includes("W"));

    return isNegativeDirection ? -value : value;
  });
}
