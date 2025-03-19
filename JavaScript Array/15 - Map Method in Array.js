/**
 * Map Method in Array
 */
// Array of names of engineers
let names = [
    'Engineer Bappy',
    'Engineer Abid',
    'Engineer Washi',
    'Engineer Ashraf',
    'Engineer Sayem',
]

/**
 * Custom function that applies a given logic to each element of an array
 * @param {Array} arr - The array to be transformed
 * @param {Function} logic - A callback function that is applied to each element
 * @returns {Array} - A new array with the transformed elements
 */
function reuseAndMap(arr, logic) {
    const result = [];  // Initialize an empty array to hold the results
    for (let i = 0; i < arr.length; i++) {  // Loop through each element of the array
        result.push(logic(arr[i], i, arr));  // Apply the logic (callback) to each element
    }
    return result;  // Return the modified array after applying the logic to all elements
}

/**
 * Using 'reuseAndMap' function to get the lengths of the strings in the 'names' array
 */
const lenths = reuseAndMap(names, (value) => value.length);

/**
 * Using 'reuseAndMap' function to convert the strings to uppercase
 */
const uppers = reuseAndMap(names, (value) => value.toUpperCase());

/**
 * Using 'reuseAndMap' function to slice the string from the 9th character (removing 'Engineer ' prefix)
 */
const sliced = reuseAndMap(names, (value) => value.substr(9));

// Output the results of 'reuseAndMap'
console.log(lenths);  // Output: Array of the lengths of each name in 'names'
console.log(uppers);  // Output: Array of uppercase versions of each name in 'names'
console.log(sliced);  // Output: Array with 'Engineer ' removed from each name

/**
 * Using JavaScript's native '.map()' method to perform similar operations as 'reuseAndMap'
 */
const length1 = names.map((value) => value.length);  // Get the lengths of the names
const upper1 = names.map((value) => value.toUpperCase());  // Convert names to uppercase
const sliced1 = names.map((value) => value.substr(9));  // Remove 'Engineer ' prefix from names

// Output the results of '.map()'
console.log('[Array]', length1);  // Output: Array of lengths of each name in 'names'
console.log('[Array]', upper1);   // Output: Array of uppercase versions of each name in 'names'
console.log('[Array]', sliced1);  // Output: Array with 'Engineer ' removed from each name

/**
 * Array of student objects with ID, name, GPA, and email
 */
const studentArray = [
    {id: 1, name: 'Ch Bappy', gpa: 3.99, email: 'bappy@gmail.com'},
    {id: 2, name: 'Abid Hasan', gpa: 2.29, email: 'abid@gmail.com'},
    {id: 3, name: 'Md Washi', gpa: 2.35, email: 'washi@gmail.com'},
    {id: 4, name: 'Md Ashraf', gpa: 3.98, email: 'ashraf@gmail.com'},
    {id: 5, name: 'Md Sayem', gpa: 2.00, email: 'sayem@gmail.com'},
];

/**
 * Using '.map()' to transform student objects and add additional properties for title and message
 * @returns {Array} - New array with transformed student objects
 */
const mappedStudents = studentArray.map(value => {
    return {
        ...value,  // Spread the existing properties of each student object
        title: `Hello ${value.name} - Your result has been published`,  // Add a new 'title' property
        msg: `Hello ${value.name}, Your result has been published and You have got ${value.gpa}. You have ${value.gpa >= 3 ? 'Passed' : 'Failed'}`  // Add a new 'msg' property based on GPA
    }
})

// Output the mapped student objects with added title and message
console.log(mappedStudents);  // Output: Array of student objects with additional properties 'title' and 'msg'

