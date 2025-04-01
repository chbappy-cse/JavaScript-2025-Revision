/**
 * Copy Array Elements
 */

// Not copy just pass array reference
const arr = [1, 2, 3, 4];
const arr2 = arr;
arr2.push(5);
console.log(arr, arr2);

// Coping using ES6 Spread Operator [Shallow Copy]
const arr3 = [...arr];
arr3.push(6);
console.log(arr, arr3);

// Shallow Copy vs Deep Copy
const points = [
    [10, 12],
    [2, 55],
    [67, 31],
];

const pointsCopy = [...points];
pointsCopy.push([1, 2]);
pointsCopy[0][0] = 100;
pointsCopy[0][1] = 120;
// console.log(points);
// console.log(pointsCopy);

// [].map [Shallow Copy]
const arr4 = arr.map((x) => x);
console.log('Map', arr4);
console.log(arr === arr4);

// [].filter [Shallow Copy]
const arr5 = arr.filter(() => true);
console.log('Filter', arr5);
console.log(arr === arr5);

// [].slice [Shallow Copy]
const arr6 = arr.slice();
console.log('Slice', arr6);
console.log(arr === arr6);

// [].concat [Shallow Copy]
const arr7 = arr.concat();
console.log('Concat', arr7);
console.log(arr === arr7);

// Array.from() [Shallow Copy]
const arr8 = Array.from(arr);
console.log('Array From', arr8);
console.log(arr === arr8);

// JSON.stringify and JSON.parse [Deep Copy]
const points2 = [
    [10, 12],
    [2, 55],
    [67, 31],
];

const pointsDeepCopy = JSON.parse(JSON.stringify(points2));
pointsDeepCopy[0][0] = 100;
pointsDeepCopy[0][1] = 120;
console.log(points2);
console.log(pointsDeepCopy);












