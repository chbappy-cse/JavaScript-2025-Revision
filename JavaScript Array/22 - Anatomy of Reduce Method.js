/**
 * Anatomy of Reduce Method
 */

// Accumulate - gather together or acquire an increasing number or quantity of

let numbers = [1, 2, 3, 4, 5];

/**
 * Implementing Sum using reduce()
 * 
 * The function `sumFunc` takes an accumulator, the current value, and the index.
 * It logs the values at each step and returns the accumulated sum.
 */
function sumFunc(accumulator, currentValue, index) {
    console.log(`Index ${index} - Acc ${accumulator} - Cur ${currentValue}`);
    return accumulator + currentValue;
}

// Initial accumulator value is set to 10
const sum = numbers.reduce(sumFunc, 10);
console.log("Sum using reduce():", sum);
