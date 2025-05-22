/* The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. 
 * Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.
Notes

There are 3 attributes

    name
    age
    sex ('M' or 'F')

When the same attribute is assigned multiple times the hello method shows it only once.
If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.
Examples

    Hello.
    Hello. My name is Bob. I am 27. I am male.
    Hello. I am 27. I am male. My name is Bob.
    Hello. My name is Alice. I am female.
    Hello. My name is Batman.

Task

Fix the code so we can all go home early.
*/

// My solution

class Dinglemouse {
  constructor() {
    this.props = {};
    this.order = [];
  }

  setName(name) {
    this.props.name = name;
    if (!this.order.includes("name")) this.order.push("name");
    return this;
  }

  setAge(age) {
    this.props.age = age;
    if (!this.order.includes("age")) this.order.push("age");
    return this;
  }

  setSex(sex) {
    this.props.sex = sex;
    if (!this.order.includes("sex")) this.order.push("sex");
    return this;
  }

  hello() {
    let result = "Hello.";

    for (let key of this.order) {
      if (key === "name") result += ` My name is ${this.props.name}.`;
      if (key === "age") result += ` I am ${this.props.age}.`;
      if (key === "sex") {
        result += ` I am ${this.props.sex === "M" ? "male" : "female"}.`;
      }
    }

    return result;
  }
}
