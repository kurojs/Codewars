/*
I don't like writing classes like this:

class Animal {
    constructor(name, species, age, health, weight, color) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.health = health;
        this.weight = weight;
        this.color = color;
    }
}

Give me the power to create a similar class like this:

const Animal = makeClass("name", "species", "age", "health", "weight", 
*/

// Solution

function makeClass(...properties) {
  return class {
    constructor(...args) {
      properties.forEach((property, index) => {
        this[property] = args[index];
      });
    }
  };
}
