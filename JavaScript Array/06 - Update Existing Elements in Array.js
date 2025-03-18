/**
 * Update Existing Elements in an Array
 */

/**
 * Updating a specific element in a simple array
 */
const numbers = [1, 2, 7, 4, 5];
numbers[2] = 3; // Changing the value at index 2 from 7 to 3
console.log("Updated numbers array:", numbers);

/**
 * Updating an element in an array of objects
 */
const students = [
    { id: 1, name: 'Washi' },
    { id: 2, name: 'Ashraf' },
    { id: 3, name: 'Bappy' },
    { id: 4, name: 'Sayem' },
    { id: 5, name: 'Abid' },
];

const givenID = 3;
const updateName = 'Ch Bappy';

// Looping through the array to find the student with the given ID and updating the name
for (let i = 0; i < students.length; i++) {
    if (givenID === students[i].id) {
        students[i].name = updateName;
        break; // Exit loop after finding and updating the student
    }
}
console.log("Updated students array:", students);
