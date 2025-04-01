/**
 * All Array prototype methods Example 
 */

/**
 * Basic Operations
 */
// length
const arr1 = [1, 2, 3];
console.log(arr1.length); // 3

// constructor
const arr2 = new Array(1, 2, 3);
console.log(arr2.constructor === Array); // true

// at
console.log([1, 2, 3].at(1)); // 2
console.log([1, 2, 3].at(-1)); // 3

/**
 * Adding/Removing Elements
 */

// concat
const arr3 = [1, 2].concat([3, 4]);
console.log(arr3); // [1, 2, 3, 4]

// pop
const arr4 = [1, 2, 3];
console.log(arr4.pop()); // 3
console.log(arr4); // [1, 2]

// push
const arr5 = [1, 2];
console.log(arr5.push(3)); // 3
console.log(arr5); // [1, 2, 3]

// shift
const arr6 = [1, 2, 3];
console.log(arr6.shift()); // 1
console.log(arr6); // [2, 3]

// unshift
const arr7 = [2, 3];
console.log(arr7.unshift(1)); // 3
console.log(arr7); // [1, 2, 3]

// splice
const arr8 = [1, 2, 3, 4];
arr8.splice(1, 2, 'a', 'b');
console.log(arr8); // [1, 'a', 'b', 4]

/**
 * Searching and Accessing
 */
// find
const arr9 = [1, 2, 3, 4];
console.log(arr9.find(x => x > 2)); // 3

// findIndex
console.log(arr9.findIndex(x => x > 2)); // 2

// findLast (new in ES2023)
console.log([1, 2, 3, 2].findLast(x => x === 2)); // 2 (last occurrence)

// findLastIndex (new in ES2023)
console.log([1, 2, 3, 2].findLastIndex(x => x === 2)); // 3

// includes
console.log([1, 2, 3].includes(2)); // true

// indexOf
console.log([1, 2, 3, 2].indexOf(2)); // 1

// lastIndexOf
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

// slice
console.log([1, 2, 3, 4].slice(1, 3)); // [2, 3]


/**
 * Transformation
 */

// join
console.log([1, 2, 3].join('-')); // "1-2-3"

// reverse
const arr10 = [1, 2, 3];
arr10.reverse();
console.log(arr10); // [3, 2, 1]

// toReversed (new in ES2023)
const arr11 = [1, 2, 3];
console.log(arr11.toReversed()); // [3, 2, 1]
console.log(arr11); // [1, 2, 3] (original unchanged)

// sort
const arr12 = [3, 1, 2];
arr12.sort();
console.log(arr12); // [1, 2, 3]

// toSorted (new in ES2023)
const arr13 = [3, 1, 2];
console.log(arr13.toSorted()); // [1, 2, 3]
console.log(arr13); // [3, 1, 2] (original unchanged)

// toSpliced (new in ES2023)
const arr14 = [1, 2, 3, 4];
console.log(arr14.toSpliced(1, 2, 'a', 'b')); // [1, 'a', 'b', 4]
console.log(arr14); // [1, 2, 3, 4] (original unchanged)

// with (new in ES2023)
const arr15 = [1, 2, 3];
console.log(arr15.with(1, 4)); // [1, 4, 3]
console.log(arr15); // [1, 2, 3] (original unchanged)

/**
 * Iteration
 */

// forEach
[1, 2, 3].forEach(x => console.log(x)); // logs 1, 2, 3

// map
console.log([1, 2, 3].map(x => x * 2)); // [2, 4, 6]

// filter
console.log([1, 2, 3, 4].filter(x => x % 2 === 0)); // [2, 4]

// reduce
console.log([1, 2, 3].reduce((acc, val) => acc + val, 0)); // 6

// reduceRight
console.log([[0, 1], [2, 3]].reduceRight((acc, val) => acc.concat(val))); // [2, 3, 0, 1]

// every
console.log([1, 2, 3].every(x => x > 0)); // true

// some
console.log([1, 2, 3].some(x => x > 2)); // true

/**
 * Newer Methods
 */

// flat
console.log([1, [2, [3]]].flat()); // [1, 2, [3]]
console.log([1, [2, [3]]].flat(2)); // [1, 2, 3]

// flatMap
console.log([1, 2, 3].flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

// copyWithin
const arr16 = [1, 2, 3, 4, 5];
console.log(arr16.copyWithin(0, 3, 5)); // [4, 5, 3, 4, 5]

// fill
const arr17 = [1, 2, 3];
console.log(arr17.fill(0, 1, 3)); // [1, 0, 0]

/**
 * Iterators
 */

// keys
for (const key of ['a', 'b', 'c'].keys()) {
    console.log(key); // 0, 1, 2
  }
  
  // values
  for (const value of ['a', 'b', 'c'].values()) {
    console.log(value); // 'a', 'b', 'c'
  }
  
  // entries
  for (const [index, value] of ['a', 'b', 'c'].entries()) {
    console.log(index, value); // 0 'a', 1 'b', 2 'c'
  }

/**
 * Conversion
 */
// toString
console.log([1, 2, 3].toString()); // "1,2,3"

// toLocaleString
const date = new Date();
console.log([date, date].toLocaleString()); // locale-specific date strings

// Array.prototype methods are inherited by all array instances
const arr = [];
console.log(arr.__proto__ === Array.prototype); // true