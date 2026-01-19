/*
Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata.
Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// Solution

var encryptThis = function (text) {
  return text.split(' ').map(word => {
    if (word.length === 0) {
      return '';
    }

    const firstCharCode = String(word.charCodeAt(0)); // Convertimos a cadena explícitamente
    let changedWord = '';

    if (word.length === 1) {
      changedWord = '';
    } else if (word.length === 2) {
      changedWord = word[1];
    } else {
      changedWord = word[word.length - 1] + word.slice(2, word.length - 1) + word[1];
    }

    return firstCharCode + changedWord;
  }).join(' ');
};
