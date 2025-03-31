/**
 * Example: Flattening a Nested Array
 * 
 * In JavaScript, we can flatten a nested array using different methods.
 * Here, we demonstrate two approaches: using the `flat()` method and the `reduce()` method.
 */

// Define a nested array
let nestedArray = [[1, 2], 3, [4, 5], [6]];

/**
 * Approach 1: Using the Array.flat() method
 * 
 * The `flat()` method creates a new array with sub-array elements 
 * concatenated into it up to the specified depth. By default, it flattens one level deep.
 */
const flatArray1 = nestedArray.flat();
console.log("Flattened using flat():", flatArray1);

/**
 * Approach 2: Using the Array.reduce() method
 * 
 * The `reduce()` method executes a reducer function on each element of the array, 
 * resulting in a single output value. Here, we use it to concatenate all elements into a flat array.
 */
const flatArray2 = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr); // Concatenating each sub-array or element to the accumulator
}, []);

console.log("Flattened using reduce():", flatArray2);


