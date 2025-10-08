/*
Let's take a look at an interesting feature of JS: custom Getters and Setters for objects.

Skimming over this may help you prepare for this kata.

The object of this exercise will be to provide a class Archiver that creates a "self-archiving"
object with respect to its temperature property, but otherwise looks and acts just like a normal JS object.
Each time the temperature property is assigned, the object should add a log entry to an array (the "archive")
that it returns via a getArchive method. The log entry should be formed as such:

{
date: // the time when the "temperature" property was assigned (Date object),
val:  // the value that was written to the "temperature" property.
}
*/

// Solution

class Archiver {
  constructor() {
    this._temperature = null;
    this._archive = [];
  }
  set temperature(temperature) {
    this._archive.push({
      date: new Date(),
      val: temperature,
    });
    this._temperature = temperature;
  }
  get temperature() {
    return this._temperature;
  }
  getArchive() {
    return this._archive;
  }
}
