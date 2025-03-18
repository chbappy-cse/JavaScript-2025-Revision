/**
 * Implementing a Basic Stack in JavaScript
 * 
 * A stack follows the Last In, First Out (LIFO) principle.
 * This implementation includes basic stack operations:
 * - push(): Adds an item to the stack.
 * - pop(): Removes and returns the top item from the stack.
 * - peek(): Returns the top item without removing it.
 * - isEmpty(): Checks if the stack is empty.
 */

const MAX_SIZE = 30; // Maximum size of the stack

class Stack {
    constructor() {
        this.list = new Array(MAX_SIZE); // Array to store stack elements
        this.top = -1; // Stack pointer initialized to -1 (empty stack)
    }

    /**
     * Push an item onto the stack.
     * @param {*} item - The item to be added to the stack.
     * @returns {boolean} - Returns true if push is successful, false if stack is full.
     */
    push(item) {
        if (this.top >= MAX_SIZE - 1) { // Check for stack overflow
            console.log('Stack Overflow');
            return false;
        }
        this.list[++this.top] = item; // Increment top and add item
        return true;
    }

    /**
     * Pop an item from the stack.
     * @returns {*} - Returns the removed item or false if the stack is empty.
     */
    pop() {
        if (this.isEmpty()) { // Check for stack underflow
            console.log('Stack Underflow');
            return false;
        }
        const item = this.list[this.top]; // Get the top item
        delete this.list[this.top]; // Remove reference to the item
        this.top--; // Decrement top pointer
        return item;
    }

    /**
     * Peek at the top item without removing it.
     * @returns {*} - Returns the top item or false if the stack is empty.
     */
    peek() {
        if (this.isEmpty()) { // If stack is empty
            console.log('Stack Underflow');
            return false;
        }
        return this.list[this.top]; // Return top item
    }

    /**
     * Check if the stack is empty.
     * @returns {boolean} - Returns true if the stack is empty, otherwise false.
     */
    isEmpty() {
        return this.top < 0;
    }
}

// Export the Stack class for use in other modules
module.exports = Stack;