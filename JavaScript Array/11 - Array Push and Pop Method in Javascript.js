/**
 * Demonstrating Stack Operations Using a Custom Stack Class and JavaScript's Built-in Array Stack
 */

const Stack = require('./10 - Implement A Basic Stack'); // Import the custom Stack class

// Using the custom Stack class to reverse a string
const stack = new Stack();
const text = 'OLLEH';

// Push each character onto the stack
for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i));
}

// Pop characters from the stack to get the reversed string
let reversedText = '';
while (!stack.isEmpty()) {
    reversedText += stack.pop();
}
console.log(reversedText); // Output: HELLO

/**
 * Using JavaScript's Built-in Array as a Stack
 */
const text1 = 'HELLO';
const jsStack = [];

// Push each character onto the array (acting as a stack)
for (let i = 0; i < text1.length; i++) {
    jsStack.push(text1.charAt(i));
}
console.log(jsStack); // Output: [ 'H', 'E', 'L', 'L', 'O' ]

// Pop characters from the stack to reverse the string
let result1 = '';
while (jsStack.length) {
    result1 += jsStack.pop();
}
console.log(result1); // Output: OLLEH