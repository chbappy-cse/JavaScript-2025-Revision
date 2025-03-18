/**
 * Slice Array into Multiple Arrays
 * This script demonstrates various uses of the `slice` method in JavaScript.
 */

// Original array
const arr = [1, 2, 3, 4, 5, 6];

// Example 1: Slicing an array
// The `slice` method extracts a portion of the array from index 1 (inclusive) to index 3 (exclusive).
const sliced = arr.slice(1, 3);
console.log('Sliced Array:', sliced); // Output: [2, 3]

// Example 2: Cloning an array
// The `slice` method can be used to create a shallow copy of the array.
const cloned = arr.slice();
console.log('Is original array equal to cloned array?', arr === cloned); // Output: false (they are different references)

// Example 3: Converting array-like objects to arrays
// The `slice` method can be used to convert array-like objects (e.g., `arguments`) into actual arrays.
function toArray() {
    // `Array.prototype.slice.call(arguments)` converts the `arguments` object into an array.
    return Array.prototype.slice.call(arguments);
}
const argArray = toArray(4, 5, 6, 7, 'test');
console.log('Arguments converted to array:', argArray); // Output: [4, 5, 6, 7, 'test']

// Example 4: Checking the constructor of the array
// This logs the constructor function of the `argArray` to confirm it is an array.
console.log('Constructor of argArray:', argArray.__proto__.constructor); // Output: [Function: Array]