/**
 * Comparing for Loop and forEach Method in JavaScript
 */

const names = ['Bappy', 'Abid', 'Wasi', 'Sayem'];

// Using a traditional for loop to iterate through an array
for (let i = 0; i < names.length; i++) {
    console.log(names); // Logs the entire array in each iteration
}

for (let i = 0; i < names.length; i++) {
    console.log(`${i + 1}: ${names[i]}`); // Logs index + 1 and element
}

/**
 * Custom Iteration Function
 * @param {Array} arr - The array to iterate over
 * @param {Function} logic - The callback function to execute on each element
 */
function reuse(arr, logic) {
    for (let i = 0; i < arr.length; i++) {
        logic(arr[i], i, arr);
    }
}

// Sample callback functions for iteration
function logs(value) {
    console.log(value);
}

function logic(value, index, arr) {
    console.log(value, index, arr);
}

// Testing the reuse function with different callbacks
reuse([1, 2], logs);
reuse(['One', 'Two', 'Three'], logic);

/**
 * Implementing a Custom forEach Function
 * @param {Array} arr - The array to iterate over
 * @param {Function} cb - The callback function to execute on each element
 */
function myForeach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

const nums = [1, 2, 3, 4];
let sum = 0;

// Callback function to sum up array elements
function sumFunc(value) {
    sum += value;
}

// Using the custom myForeach function
myForeach(nums, sumFunc);
console.log(sum); // Output: 10

myForeach(names, (value, index) => {
    console.log(`${index + 1}: ${value}`);
});
