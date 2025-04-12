// Given two arrays, one with first names and one with last names, create a new array with full names.

const names = [['John', 'Doe'], ['Jane', 'Doe']];

const fullNames = names.map(name => name.join(" "))

console.log(fullNames); // Output: ['John Doe', 'Jane Doe']