/**
 * Sorting
 */

// Implement Bubble Sort
let myArray = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90];

const bubbleSort = (array) => {
    for (let i = 0; i < array.length -1; i++) {
        for (let j = 0; j < array.length -1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            };
        };
    };
};

/* console.log('[Unsorted]', myArray);
bubbleSort(myArray)
console.log('[Sorted]', myArray); */

/**
 * How to Work with Sort Method
 */

// let numbers = [10, 20, 30, 40, 50 ,60, 70, 80, 90, 100];
// Will not work perfectly
/* numbers.sort();
console.log(numbers); */


// We have to define the callback with the condition
// Suppose we went to sort the numbers in ascending order
let numbers = [10, 1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90, 100];

/* numbers.sort((a, b) => a - b);
console.log(numbers); */
numbers.sort((a, b) =>{
    // console.log(a, b);
    return a - b; // ascending
    // return b - a; // descending
});
console.log(numbers);

// If we want to sort string then what should we do?
let strings = ['apple', 'Cat', 'Ball', 'Apple'];
strings.sort((a, b) =>{
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a > b) return 1;
    if(b > a) return -1;
    return 0;
});

console.log(strings);

// Object Sort
const team = [
    {id: 5, name: 'Bappy'},
    {id: 4, name: 'Ashraf'},
    {id: 3, name: 'Washi'},
    {id: 2, name: 'Abid'},
    {id: 1, name: 'Sayem'},
];

// Sort by ID
team.sort((a, b) =>{
    if(a.id > b.id) return 1;
    if(b.id > a.id) return -1;
    return 0;
});
console.log(team);

// Sort by Name
team.sort((a, b) =>{
    if(a.name > b.name) return 1;
    if(b.name > a.name) return -1;
    return 0;
});
console.log(team);




