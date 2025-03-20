/**
 * Student Data Filtering and Messaging System
 */

const studentArray = [
    { id: 1, name: 'Ch Bappy', gpa: 3.99, email: 'bappy@gmail.com', due: true, dueAmount: 12000, clearedDueRecently: false },
    { id: 2, name: 'Abid Hasan', gpa: 3.00, email: 'abid@gmail.com', due: false, dueAmount: 0, clearedDueRecently: true },
    { id: 3, name: 'Md Ashruffazaman', gpa: 3.98, email: 'ashraf@gmail.com', due: true, dueAmount: 12000, clearedDueRecently: false },
    { id: 4, name: 'Abu Sayem', gpa: 2.90, email: 'sayem@yahoo.com', due: false, dueAmount: 0, clearedDueRecently: false },
    { id: 5, name: 'Jamil Hossain', gpa: 3.10, email: 'jamil@gmail.com', due: false, dueAmount: 0, clearedDueRecently: false },
];

// 1️⃣ Students with GPA below 3.5 (Need Motivation)
const lowGpaStudents = studentArray.filter(student => student.gpa < 3.5);
lowGpaStudents.forEach(student => {
    console.log(`📚 Hey ${student.name}, keep pushing yourself! A little more effort and you'll achieve even greater success! 💪`);
});

// 2️⃣ Students with Due Payments (Need Reminder)
const dueStudents = studentArray.filter(student => student.dueAmount > 0);
dueStudents.forEach(student => {
    console.log(`💳 Dear ${student.name}, please clear your due amount of ${student.dueAmount} BDT to avoid any inconvenience. Thank you!`);
});

// 3️⃣ Students with Low GPA & Due Payments (Struggling Students)
const strugglingStudents = studentArray.filter(student => student.gpa < 3.5 && student.dueAmount > 0);
strugglingStudents.forEach(student => {
    console.log(`⚠️ Hey ${student.name}, focus on both your studies and managing your dues of ${student.dueAmount} BDT. Success is ahead! 🚀`);
});

// 4️⃣ Top Performers (GPA 3.8+)
const topPerformers = studentArray.filter(student => student.gpa > 3.8);
topPerformers.forEach(student => {
    console.log(`🎉 Congratulations ${student.name}! Your outstanding GPA of ${student.gpa} is commendable. Keep up the great work!`);
});

// 5️⃣ Students Who Need Improvement (GPA 3.0 - 3.5)
const needImprovement = studentArray.filter(student => student.gpa >= 3.0 && student.gpa < 3.5);
needImprovement.forEach(student => {
    console.log(`📖 Hey ${student.name}, you're doing well, but a little extra effort can push your GPA even higher! Keep striving!`);
});

// 6️⃣ At-Risk Students (GPA below 3.0)
const atRiskStudents = studentArray.filter(student => student.gpa < 3.0);
atRiskStudents.forEach(student => {
    console.log(`⚠️ Attention ${student.name}, your GPA is below 3.0 (${student.gpa}). Seek extra support and focus on improvement. You got this! 💡`);
});

// 7️⃣ Responsible Students (Good GPA + No Dues)
const responsibleStudents = studentArray.filter(student => student.gpa > 3.5 && student.dueAmount === 0);
responsibleStudents.forEach(student => {
    console.log(`👏 ${student.name}, excellent GPA (${student.gpa}) and no dues! Keep up the great discipline and dedication! 🌟`);
});

// 8️⃣ Students Who Cleared Their Dues Recently
const recentlyClearedDues = studentArray.filter(student => student.clearedDueRecently);
recentlyClearedDues.forEach(student => {
    console.log(`✅ Well done, ${student.name}, for clearing your dues! Stay financially responsible and focus on your studies. 🎓`);
});

// 9️⃣ Categorize Students Based on GPA Ranges
const categorizedStudents = {
    high: studentArray.filter(student => student.gpa >= 3.8),
    medium: studentArray.filter(student => student.gpa >= 3.5 && student.gpa < 3.8),
    low: studentArray.filter(student => student.gpa < 3.5),
};
console.log("📊 Student GPA Categories:", categorizedStudents);

// 🔟 Group Students by Email Provider (Gmail, Yahoo, etc.)
const groupByEmailDomain = studentArray.reduce((acc, student) => {
    const domain = student.email.split('@')[1]; // Extract domain name
    if (!acc[domain]) {
        acc[domain] = [];
    }
    acc[domain].push(student.name);
    return acc;
}, {});
console.log("📧 Students Grouped by Email Domain:", groupByEmailDomain);
