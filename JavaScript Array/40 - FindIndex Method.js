/**
 * FindIndex Method : FindIndex return index
 */

const arr1 = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90];

let todos = [
    {name: 'Project 1', isDone: true},
    {name: 'Project 2', isDone: true},
    {name: 'Project 3', isDone: true},
    {name: 'Project 4', isDone: true},
    {name: 'Project 5', isDone: false},
    {name: 'Project 6', isDone: false},
    {name: 'Project 7', isDone: false},
    {name: 'Project 8', isDone: false},
];

const index1 = arr1.findIndex((item) => item === 11);
console.log(index1);

const index2 = todos.findIndex((item) => item.name === 'Project 6');
console.log(index2);

/**
 * Find Method : Find return object
 */

let objTodos = [
    {id: '123', task: 'Eat', time: 'Morning'},
    {id: '234', task: 'Code', time: 'Afternoon'},
    {id: '532', task: 'Coffee break', time: 'Evening'},
    {id: '121', task: 'Sleep', time: 'Night'},
];

const todoFind = objTodos.find((item) => item.time === 'Afternoon');
todoFind.task = 'Debugging!!'; // Find object mutable
console.log(todoFind);
console.log(objTodos);

let result = [
    {name: 'Tamim', score: 89},
    {name: 'Reyad', score: 85},
    {name: 'Sakib', score: 96},
    {name: 'Mehedi', score: 90},
];

const highest = 96;
const player = result.find((item) => item.score === highest);
console.log(player);




