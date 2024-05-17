"use strict";
/*
Write a function calculateLetters that accepts a string and return an object with keys of each letter in the string, and value is the quantity of each letter in a string

Example:
const string ='aabca';

calculateChars('aabca') === {
  a: 3,
  b: 1,
  c: 1.
};

caluclateChars() === {}

*/

function calculateChars(string) {
  const result = {};

  for (const letter of string) {
    if (!result[letter]) {
      result[letter] = {
        items: [letter],
        quantity: 1,
      };
    } else {
      result[letter].items.push(letter);
      result[letter].quantity += 1;
    }
  }

  return result;
}

const result = calculateChars("aabcapojwiejhegokmwefpokvm");

console.log(result["a"]);
// delete result['a']
result["x"] = 1;
result.x = 5;
result.x = 10;
const newResult = result.x ** 2;
console.log(newResult);
console.log(result);

// DECLARATION
let someVariable; // undefined

// ASSIGN
someVariable = 5;

// INITIALIZATION
const newVariable = 5;

function someFunction() {}
