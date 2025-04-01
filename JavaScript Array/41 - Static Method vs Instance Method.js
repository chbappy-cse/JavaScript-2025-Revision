/**
 * Static Method vs Instance Method
 */

// Array.from()
const s = Array.from('Ch Bappy');
console.log(s);

const set = new Set(['foo', 'bar', 'baz', 'foo']);
const s1 = Array.from(set);
console.log(s1);

const mapper = new Map([
    ['1', 'a'],
    ['2', 'b'],
]);

const mp1 = Array.from(mapper.values()); 
const mp2 = Array.from(mapper.keys());
console.log(mp1, mp2);

function f() {
    return Array.from(arguments);
}
console.log(f(1, 2, 3));

// Using an arraw function as the map function to manipulate the elements
const mapFunc = Array.from([1, 2, 3], (x) => x + x);
console.log(mapFunc);

// Generate a sequesce of numbers science the array is initialized with `undefined` on each position, the value of `v` below will be `undefined`
const generateSequenceNumber = Array.from({length: 5}, (v, i) => i);
console.log(generateSequenceNumber);






