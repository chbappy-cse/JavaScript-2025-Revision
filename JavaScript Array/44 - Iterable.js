/**
 * Iterable
 */
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function() {
            let result;
            if (nextIndex < end) {
                result = {value: nextIndex, done: false};
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {value: iterationCount, done: true};
        },
    };
    return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while(!result.done){
    console.log(result.value);
    result = it.next();
}

console.log('Iteration Over', result.value);


/**
 * Find Iterator from Array
 */

const arr = ['a', 'b', 'c', 'd'];
const iArr = arr[Symbol.iterator]();

console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());


/**
 * Keys, Values and Entries
 */
const array = ['a', 'b', 'c'];
const keys = array.keys(); // 0, 1, 2 Iterator
const values = array.values(); // 'a', 'b', 'c'
const entries = array.entries(); // [0, 'a'], [1, 'b'], [2, 'c']

console.log(keys);
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());

console.log(values);
console.log(values.next());
console.log(values.next());
console.log(values.next());

console.log(entries);
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());

/**
 * Array and For Of Loop
 */
const loop = (it, name) => {
    for (let v of it) {
        console.log(`[${name}] - ${v}`);
    }
};

loop(keys, 'KEY');
loop(values, 'VALUE');
loop(entries, 'ENTRY');

const itArr = [3, 5, 7, 9];
loop(itArr, 'ARRAY')