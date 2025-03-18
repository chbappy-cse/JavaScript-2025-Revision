/**
 * Delete Specific Elements from an Array
 */

// Initialize an array with numbers from 1 to 13
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Remove the first element using shift()
numbers.shift(); // Removes 1 from the beginning

// Remove the last element using pop()
numbers.pop(); // Removes 13 from the end

// Alternative way to remove the last element by reducing array length
numbers.length = numbers.length - 1; // Removes 12 from the end

// Remove an element at a specific index using splice()
numbers.splice(2, 1); // Removes the element at index 2 (4 in this case)

// Remove an element by value using splice inside a loop
const toBeDeleted1 = 5;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === toBeDeleted1) {
        numbers.splice(i, 1); // Removes 5
        break; // Stops loop after first removal
    }
}

// Remove an element by value using filter (preferred for immutability)
const toBeDeleted2 = 6;
numbers = numbers.filter(item => item !== toBeDeleted2); // Removes 6

// Delete an element using the delete operator (not recommended as it leaves undefined)
delete numbers[1]; // Removes element at index 1 but keeps an empty slot

// Reset the whole array by reassigning an empty array
let x = [1, 2, 3];
let y = x;
x = []; // x becomes an empty array, but y still holds reference to old array
console.log(x, y);

// Alternative way to reset an array by setting length to 0
let xx = [1, 2, 3];
let yy = xx;
xx.length = 0; // Clears xx and since yy refers to the same array, it also gets cleared
console.log(xx, yy);

// Reset an array using a while loop
const numbers2 = [1, 2, 3, 4, 5, 6];
while (numbers2.length) numbers2.pop(); // Removes all elements one by one
console.log(numbers2);

// Final output of numbers array after all deletions
console.log(numbers);
