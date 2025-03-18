/**
 * Implementing a Basic Queue in JavaScript
 * 
 * A queue follows the First In, First Out (FIFO) principle.
 * This implementation includes basic queue operations:
 * - enqueue(): Adds an item to the queue.
 * - dequeue(): Removes an item from the front of the queue.
 * - showQueue(): Displays all elements in the queue.
 * - next(): Returns the front item without removing it.
 * - isEmpty(): Checks if the queue is empty.
 */

const MAX_SIZE = 30; // Maximum size of the queue

class Queue {
    constructor() {
        this.front = 0; // Points to the front of the queue
        this.rear = 0; // Points to the next available position at the rear
        this.queue = new Array(MAX_SIZE); // Array to store queue elements
    }

    /**
     * Adds an item to the queue.
     * @param {*} item - The item to be added.
     * @returns {boolean} - Returns false if the queue is full.
     */
    enqueue(item) {
        if (this.rear === MAX_SIZE) { // Check if queue is full
            console.log('Queue is full');
            return false;
        }
        this.queue[this.rear++] = item; // Add item and increment rear pointer
        return true;
    }

    /**
     * Removes an item from the front of the queue.
     * @returns {*} - Returns the removed item or undefined if the queue is empty.
     */
    dequeue() {
        if (this.isEmpty()) { // Check if queue is empty
            console.log('Queue is Empty');
            return;
        }
        const item = this.queue[this.front]; // Store the front item
        
        // Shift all elements one position to the left
        for (let i = this.front; i < this.rear - 1; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        
        delete this.queue[--this.rear]; // Remove reference to last item and decrement rear
        return item;
    }

    /**
     * Displays all items in the queue.
     */
    showQueue() {
        if (this.isEmpty()) {
            console.log('Queue is Empty');
            return;
        }
        for (let i = this.front; i < this.rear; i++) {
            console.log('[Displaying]', this.queue[i]);
        }
    }

    /**
     * Returns the front item without removing it.
     * @returns {*} - The front item or undefined if the queue is empty.
     */
    next() {
        if (this.isEmpty()) { // Corrected check (was missing parentheses)
            console.log('Queue is Empty');
            return;
        }
        return this.queue[this.front];
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} - Returns true if the queue is empty, otherwise false.
     */
    isEmpty() {
        return this.front === this.rear;
    }
}

// Export the Queue class for use in other modules
module.exports = Queue;
