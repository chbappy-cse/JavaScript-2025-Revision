/**
 * 🚀 Some() and Every() Array Methods - Explanation & Use Cases
 * 
 * 🔹 `some()` → Checks if at least ONE element in the array meets a condition.
 * 🔹 `every()` → Checks if ALL elements in the array meet a condition.
 * 
 * ✅ Practical Example 1: Product Reviews
 * ✅ Practical Example 2: Cricket Match Performance
 */

/** 🎯 1️⃣ Checking if ALL Product Reviews are Positive */

let productReview = [
    { name: 'Ch Bappy', response: 'positive', rating: 5 },  // Rating: 5 (Positive)
    { name: 'Md Ashraf', response: 'positive', rating: 4 }, // Rating: 4 (Positive)
    { name: 'Abu Sayem', response: 'positive', rating: 4 }, // Rating: 4 (Positive)
    { name: 'Abid Hasan', response: 'positive', rating: 4 } // Rating: 4 (Positive)
];

/** 
 * 🏆 Using `every()`
 * 
 * - The `.every()` method checks if **ALL** elements satisfy the condition.
 * - In this case, we check if every review has a rating above 3.
 * - If all reviews have a rating greater than 3, we consider it 100% positive.
 */

const allPositive = productReview.every(review => review.rating > 3);

console.log(allPositive ? '✅ 100% Positive Reviews!' : '⚠️ Some customers are not satisfied');

/** 
 * 🔍 Expected Output: 
 * ✅ 100% Positive Reviews! 
 * (Since all ratings are greater than 3)
 */

/** 🎯 2️⃣ Checking if at Least One Player Scored 400+ Runs */

let testRunsInASingleMatch = [
    { name: 'Sakib Al Hasan', runs: 250 },  // 250 runs
    { name: 'Tamim Iqbal', runs: 200 },     // 200 runs
    { name: 'Virat Kholi', runs: 350 },     // 350 runs
    { name: 'Rohit Sharma', runs: 299 },    // 299 runs
    { name: 'BC Lara', runs: 400 }          // 400 runs (Highest)
];

/** 
 * 🏆 Using `some()`
 * 
 * - The `.some()` method checks if at **least one** element satisfies the condition.
 * - In this case, we check if at least one player has scored **400 or more runs**.
 * - If at least one match has 400+ runs, it returns `true`, otherwise `false`.
 */

const atLeastOnePlayerScored400 = testRunsInASingleMatch.some(player => player.runs >= 400);

console.log(atLeastOnePlayerScored400 ? '🏏 Yes! A player scored 400+ runs!' : '❌ No one reached 400 runs');

/** 
 * 🔍 Expected Output: 
 * 🏏 Yes! A player scored 400+ runs!
 * (Because BC Lara scored exactly 400)
 */
