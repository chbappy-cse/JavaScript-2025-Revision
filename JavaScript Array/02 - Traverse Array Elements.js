/**
 * Traverse Array Elements
 */

// Sample array
const arr = [47, 105, 78, 63, 99, 14, 55, 99];

/**
 * Simple Traversal
 * Iterates through the array and prints each element
 */
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/**
 * Calculate Sum and Average
 * - Computes the sum of all elements in the array
 * - Computes the average by dividing the sum by the length of the array
 */
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Adding each element to sum
}
console.log("Sum:", sum);
console.log("Average:", sum / arr.length);

/**
 * Find the Largest Number in the Array
 * - Assumes the first element as the largest initially
 * - Iterates through the array and updates the largest value if a bigger number is found
 */
let largeNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largeNumber) {
        largeNumber = arr[i];
    }
}
console.log("Largest Number:", largeNumber);

/**
 * Find the Smallest Number in the Array
 * - Assumes the first element as the smallest initially
 * - Iterates through the array and updates the smallest value if a smaller number is found
 */
let smallNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallNumber) {
        smallNumber = arr[i];
    }
}
console.log("Smallest Number:", smallNumber);
