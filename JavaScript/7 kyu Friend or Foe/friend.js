/*
Make a program that filters a list of strings and returns a list with only your friends' names in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours. Otherwise, you can be sure that they are not.

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Examples:

friend(["Ryan", "Kieran", "Mark"]) // returns ["Ryan", "Mark"]
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]) // returns ["Ryan"]
*/

// Solution

function friend(friends) {
  return friends.filter((name) => name.length === 4);
}
