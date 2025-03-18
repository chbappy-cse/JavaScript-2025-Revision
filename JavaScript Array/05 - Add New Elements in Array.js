/**
 * Add New Elements to an Array
 */

/**
 * Using `push` to add elements at the end of an array
 */
const arrP1 = [1, 2, 3];
const arrP2 = [7, 8];
arrP1.push(4); // Adds 4 at the end
arrP1.push(5, 6); // Adds 5 and 6 at the end
console.log("After push:", arrP1);

/**
 * Using the spread operator to merge another array at the end
 */
arrP1.push(...arrP2); // Adds elements of arrP2 at the end
console.log("After spreading arrP2:", arrP1);

// Alternative using prototype
// Array.prototype.push.apply(arrP1, arrP2);

/**
 * Using `unshift` to add elements at the beginning of an array
 */
const arrU1 = [5, 6, 7];
const arrU2 = [1, 2, 3];
arrU1.unshift(4); // Adds 4 at the beginning
arrU1.unshift(...arrU2); // Adds elements of arrU2 at the beginning
console.log("After unshift:", arrU1);

// Alternative using prototype
// Array.prototype.unshift.apply(arrU1, arrU2);

/**
 * Using `splice` to insert elements at a specific index
 */
const arrS1 = [1, 2, 3, 5, 9];
const arrS2 = [6, 7, 8];
arrS1.splice(3, 0, 4); // Inserts 4 at index 3
arrS1.splice(5, 0, ...arrS2); // Inserts elements of arrS2 at index 5
console.log("After splice:", arrS1);