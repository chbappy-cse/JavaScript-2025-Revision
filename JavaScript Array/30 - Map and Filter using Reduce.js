/**
 * Map and Filter using Reduce
 */
const numbers = [1, 2, 3, 4, 5];

// Mapped
const squareNumbers = numbers.reduce((acc, curr) => {
    acc.push(curr * curr);
    return acc;
}, []);

console.log(squareNumbers);

// Filter
const filterOddNumbers = numbers.reduce((acc, curr) =>{
    if (curr % 2 === 1) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(filterOddNumbers);

// Big Array
const bigArray = [];
for(let i = 0; i < 5000000; i++){
    bigArray.push(i);
}

// Map and Filter Chain - Time Efficiency
console.time('Both');
bigArray.filter((value) => value % 2 === 0).map((value) => value * 2);
console.timeEnd('Both');

// Map and Filter Reduce - Time Efficiency
console.time('Reduce');
bigArray.reduce((acc, curr) => {
    if (curr %2 === 0) {
        acc.push(curr * 2);
    }
    return acc;
}, []);
console.timeEnd('Reduce');