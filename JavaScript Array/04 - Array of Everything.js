/**
 * Array of Anything: Demonstrates an array that can hold different data types.
 */
const arr = [10, 'Ten', true, getTen, {ten: 10}, [10, 10]];
console.log(arr);

// Function that returns 10
function getTen() {
    return 10;
}

/**
 * Array of Objects: Represents favorite YouTube channels with their names and URLs.
 */
const favChannels = [
    {name: 'Traversy Media', url: 'youtube.com'},
    {name: 'Wes Boss', url: 'youtube.com'},
    {name: 'Freecodecamp', url: 'youtube.com'},
    {name: 'CodeWithCh', url: 'youtube.com'},
];

/**
 * Array of Functions: Demonstrates storing functions in an array and executing them dynamically.
 */
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, div, mod];
const a = 10, b = 20;

// Iterating through function array and executing each function
for (let i = 0; i < funcs.length; i++) {
    const result = funcs[i](a, b);
    console.log(`[${funcs[i].name}] Result = ${result}`);
}

/**
 * Array of Arrays: Multi-dimensional array example representing a point table.
 */
const pointTable = [
    [0, 0],
    [3, 5],
    [5, 7],
    [10, 23],
];

// One-dimensional traversal of pointTable
for (let i = 0; i < pointTable.length; i++) {
    console.log(`Point ${i}. x = ${pointTable[i][0]}, y = ${pointTable[i][1]}`);
}

/**
 * Two-Dimensional Array Traversal Example
 */
const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Nested loop to traverse a two-dimensional array
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        console.log(numbers[i][j]);
    }
}

/**
 * Matrix Addition Example
 */
const matriA = [
    [1, 3],
    [1, 0],
    [1, 2],
];

const matriB = [
    [0, 0],
    [7, 5],
    [2, 1],
];

/**
 * Function to add two matrices element-wise.
 * Assumes both matrices have the same dimensions.
 */
const matriSum = (matriA, matriB) => {
    const result = [];
    for (let i = 0; i < matriA.length; i++) {
        const row = [];
        for (let j = 0; j < matriA[i].length; j++) {
            row.push(matriA[i][j] + matriB[i][j]);
        }
        result.push(row);
    }
    return result;
};

// Calculate and print the sum of matrices
const matriC = matriSum(matriA, matriB);
console.log(matriC);
