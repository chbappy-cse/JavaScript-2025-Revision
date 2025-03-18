/**
 * @fileoverview Demonstrates different ways to concatenate multiple arrays in JavaScript.
 */

/**
 * Example 1: Using the concat() method to merge two arrays.
 */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2); // Merging arr1 and arr2
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

/**
 * Example 2: Using the spread operator (...) to concatenate arrays.
 */
const arr4 = [...arr1, ...arr2]; // Expanding elements from both arrays
console.log(arr4); // Output: [1, 2, 3, 4, 5, 6]

/**
 * Example 3: Using concat() to merge multiple arrays and additional elements.
 */
const arr5 = [].concat(arr1, arr2, 7, 8, 9); // Adding extra elements during merge
console.log(arr5); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
