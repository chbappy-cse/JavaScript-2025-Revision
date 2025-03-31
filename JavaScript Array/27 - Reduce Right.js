/**
 * 
 */

// Understand Reduce Right
const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
];
const result = arr.reduceRight((acc, curr) =>{
    return acc.concat(curr);
}, []);
console.log(result);

// Explain Reduce Right
const nums = [1, 2, 3, 4];
const sum = nums.reduceRight((acc, curr) => {
    console.log(`Acc [${acc}] - Curr [${curr}]`);
    return acc + curr;    
}, 0)

console.log(`Sum = ${sum}`);
