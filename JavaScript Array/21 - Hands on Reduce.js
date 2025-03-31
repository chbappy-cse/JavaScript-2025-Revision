/**
 * Hands on Reduce
 * This script demonstrates the use of the `reduce` method in JavaScript to calculate
 * the sum and average of an array of numbers.
 */

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

/**
 * Implementing Sum using Reduce
 * The `reduce` method iterates over each element in the array and applies a reducer function.
 * The reducer function takes two arguments:
 * - accumulator: The accumulated value previously returned in the last invocation.
 * - currentValue: The current element being processed in the array.
 * The function returns the sum of the accumulator and the current value.
 */
function reduce(accumulator, currentValue) {
    return accumulator + currentValue;
}

// Use the `reduce` method to calculate the sum of the numbers
const sumNumbers = numbers.reduce(reduce);
console.log("Sum of numbers:", sumNumbers); // Output: 15

/**
 * Implementing Average using Reduce
 * The `reduce` method is used again, but this time to calculate the average of the numbers.
 * The reducer function takes four arguments:
 * - acc: The accumulator, which holds the running total.
 * - cur: The current element being processed.
 * - index: The index of the current element.
 * - arr: The array being processed.
 * The function adds the current value to the accumulator and, if it's the last element,
 * divides the total by the length of the array to get the average.
 */
const avgNumbers = numbers.reduce((acc, cur, index, arr) => {
    acc += cur; // Add the current value to the accumulator
    if (index === arr.length - 1) {
        // If it's the last element, return the average
        return acc / arr.length;
    }
    return acc; // Otherwise, return the accumulator
});

console.log("Average of numbers:", avgNumbers); // Output: 3