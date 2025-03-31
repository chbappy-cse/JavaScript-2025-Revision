/**
 * Example FlatMap
 */

const arr = [1, 2, 3, 4];

// FlatMap = Map -> Flat
const map = arr.map((x) => [x * 2]);
console.log(map);

const flatMap = arr.flatMap((x) => [x * 2]);
console.log(flatMap);

const flatMap1 = arr.flatMap((x) => [x, x * 2])
console.log(flatMap1);


const reduceFlatMap = arr.reduce((acc, curr) => {
    return acc.concat(curr * 2);
}, []);

console.log(reduceFlatMap);

const reduceFlatMap1 = arr.reduce((acc, curr) => {
    return acc.concat(curr, curr * 2);
}, []);

console.log(reduceFlatMap1);

