/**
 * Demonstrating Queue Operations Using a Custom Queue Class and JavaScript's Built-in Array Queue Methods
 */

const Queue = require('./12 - Implement A Basic Queue in Javascript'); // Import the custom Queue class
const queue = new Queue();

// Enqueue items into the queue
queue.enqueue('Task One');
queue.enqueue('Task Two');
queue.enqueue('Task Three');

// Display the queue
queue.showQueue();

// Dequeue an item
queue.dequeue();

// Display the queue after dequeuing
queue.showQueue();

// Display the next item in the queue
console.log(queue.next());

// Print the entire queue object
console.log(queue);

/**
 * Using JavaScript's Built-in Array Methods as a Queue
 */
const q = [];

// Using push() to add elements to the queue
q.push('Item One');
q.push('Item Two');
q.push('Item Three');

console.log(q); // Output: [ 'Item One', 'Item Two', 'Item Three' ]

// Using shift() to remove elements from the front of the queue
q.shift();
q.shift();

console.log(q); // Output: [ 'Item Three' ]
