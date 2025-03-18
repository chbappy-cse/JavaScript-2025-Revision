/**
 * Update Array Elements and Fill Array
 */

/**
 * Manually filling an array with `false`
 */
const arr1 = new Array(10); // Creates an array with 10 empty slots
for (let i = 0; i < arr1.length; i++) {
    arr1[i] = false; // Manually setting each element to false
}
console.log(arr1);

/**
 * Using the `fill` method to populate an array with `0`
 */
const arr2 = new Array(10);
arr2.fill(0); // Fills all positions with 0
console.log(arr2);

/**
 * Updating specific array elements
 */
const names = ['Bappy', 'Rakib', 'Jahangir'];
names[0] = 'Ch Bappy';
names[1] = 'Saful Alom Rakib';
names[2] = 'Jahangir Alom';
console.log(names);

/**
 * Filling an array and updating it with a condition
 *
 * - First, creates an array of size 9 filled with `false`
 * - Then, iterates through the array and updates each index with 'X' or 'O'
 *   based on a random number greater than 5.
 */
const response = new Array(9);
response.fill(false);
for (let i = 0; i < response.length; i++) {
    const rand = Math.floor(Math.random() * 10 + 1);
    response[i] = rand > 5 ? 'X' : 'O';
}
console.log(response);

/**
 * Arrays are mutable in JavaScript
 *
 * The function modifies the original array by prepending an index to each element.
 */
function update(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `${i + 1}. ${arr[i]}`; // Modifies the existing array
    }
    return arr; // Returns the same modified array
}

const updatedNames = update(names);
console.log(names); // The original array is modified
console.log(updatedNames); // Same reference as `names`
console.log(names === updatedNames); // true, since arrays are passed by reference
