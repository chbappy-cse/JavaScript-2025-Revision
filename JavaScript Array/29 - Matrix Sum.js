/**
 * Matrix Sum
 */

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Horizontal Sum
const resultHorizontalSum = matrix.map((row) =>{
    return row.reduce((a, b) => a + b);
});
console.log(`Horizontal Sum Result: ${resultHorizontalSum}`);

// Vertical Sum
const resultVerticalSum = matrix.reduce((acc, curr) =>{
    return acc.map((value, index) => curr[index] + value);
});
console.log(`$Vertical Sum Result: ${resultVerticalSum}`);

// Flat Sum
const resultFlatSum = matrix.reduce((acc, curr) =>{
    return acc + curr.reduce((a, b) => a+b);
}, 0);
console.log(`Flat Sum Result: ${resultFlatSum}`);
