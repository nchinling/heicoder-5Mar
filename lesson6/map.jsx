let numbers = [1, 2, 3];
let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled); // Output: [2, 4, 6]

// - **Calling `.map()`**
//     - We call **`.map()`** on our **`numbers`** array. **`.map()`** will go through each element in the array.
// - **Callback Function**
//     - For each element in the array, **`.map()`** calls a function (in this case, an anonymous function). This function gets the current element as its argument (**`number`** in our example).
// - **Return Value**
//     - Whatever we return from this function will be placed into a new array at the corresponding index. In our example, we return **`number * 2`**, so each element in the new array will be double the value of the corresponding element in the original array.
// - **New Array**
//     - Finally, **`.map()`** returns a new array made up of whatever was returned from the callback function at each step. It does not change the original array.


// Converting an Array of Numbers
let celsius = [0, 20, 30, 40];
let fahrenheit = celsius.map(function(temp) {
    return (temp * 9/5) + 32;
});

console.log(fahrenheit); // Output: [32, 68, 86, 104]

// Extracting Data from an Array of Objects

let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Carol', age: 35 }
];

let names = people.map(person => person.name);

console.log(names); // Output: ['Alice', 'Bob', 'Carol']


// The goal of **`.map()`** is to perform a transformation on each element of an array and **collect all the results**

// **`.map()`** in the above example gets the value of the key **`name`** for each element in the array, and then returns a new array containing the results

// Performing Complex Calculations
let numbers = [1, 4, 9, 16];
let roots = numbers.map(Math.sqrt);

console.log(roots); // Output: [1, 2, 3, 4]
