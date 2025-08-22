/*
For a given chemical formula represented by a string, count the number of atoms of each element
contained in the molecule and return an object (associative array in PHP, Dictionary<string,
int> in C#, Map<String,Integer> in Java).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

As you can see, some formulas have brackets in them. The index outside the brackets tells you
that you have to multiply count of each atom inside the bracket on this index. 
For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested.
Index after the braces is optional.
*/

// Solution

export function parseMolecule(formula: string): Record<string, number> {
  const stack: Record<string, number>[] = [{}];
  const regex = /([A-Z][a-z]?|\d+|[()\[\]{}])/g;
  const tokens: string[] = formula.match(regex) ?? [];

  const openBrackets = new Set(["(", "[", "{"]);
  const closeBrackets: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let i = 0;
  while (i < tokens.length) {
    const token: string = tokens[i];

    if (/^[A-Z][a-z]?$/.test(token)) {
      let count = 1;
      if (i + 1 < tokens.length && /^\d+$/.test(tokens[i + 1])) {
        count = parseInt(tokens[i + 1], 10);
        i++;
      }
      stack[stack.length - 1][token] =
        (stack[stack.length - 1][token] || 0) + count;
    } else if (openBrackets.has(token)) {
      stack.push({});
    } else if (token in closeBrackets) {
      const group = stack.pop()!;
      let multiplier = 1;
      if (i + 1 < tokens.length && /^\d+$/.test(tokens[i + 1])) {
        multiplier = parseInt(tokens[i + 1], 10);
        i++;
      }
      for (const [el, cnt] of Object.entries(group)) {
        stack[stack.length - 1][el] =
          (stack[stack.length - 1][el] || 0) + cnt * multiplier;
      }
    }

    i++;
  }

  return stack[0];
}
