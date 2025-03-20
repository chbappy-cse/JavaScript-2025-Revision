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

/** 1️⃣ Identify Students Who Failed (GPA below 3.0) */
const failingStudents = studentArray.filter(student => student.gpa < 3.0);
failingStudents.forEach(student => {
    console.log(`⚠️ ${student.name}, your GPA (${student.gpa}) is below 3.0. You have failed. Please seek guidance and improve your performance.`);
});

/** 2️⃣ Identify High GPA Students Who Have Due Payments */
const highGpaDueStudents = studentArray.filter(student => student.gpa > 3.5 && student.dueAmount > 0);
highGpaDueStudents.forEach(student => {
    console.log(`💰 ${student.name}, you have a great GPA (${student.gpa}) but still have due payments of ${student.dueAmount} BDT. Please clear them soon.`);
});

/** 3️⃣ Identify Students Who Need Improvement (GPA 3.0 - 3.5) */
const averageStudents = studentArray.filter(student => student.gpa >= 3.0 && student.gpa < 3.5);
averageStudents.forEach(student => {
    console.log(`📚 ${student.name}, your GPA (${student.gpa}) is decent, but with extra effort, you can reach excellence! Keep pushing forward!`);
});

/** 4️⃣ Identify Outstanding Performers (GPA 3.8+) */
const topPerformers = studentArray.filter(student => student.gpa > 3.8);
topPerformers.forEach(student => {
    console.log(`🎉 Congratulations ${student.name}! Your exceptional GPA of ${student.gpa} is a great achievement. Keep shining!`);
});

/** 5️⃣ Identify Students Who Recently Cleared Their Dues */
const recentlyClearedDues = studentArray.filter(student => student.clearedDueRecently);
recentlyClearedDues.forEach(student => {
    console.log(`✅ Good job ${student.name}, for clearing your dues on time! Stay financially responsible and keep up your studies.`);
});

/** 6️⃣ Generate Email Templates for Different Categories */
const emailTemplates = studentArray.map(student => {
    let title = "General Notification";
    let msg = "Please stay updated with your academic progress.";

    if (student.gpa < 3.0) {
        title = "Result Published - Action Required";
        msg = "You have failed. Please contact your academic advisor for guidance.";
    } else if (student.gpa >= 3.0 && student.gpa < 3.5) {
        title = "Keep Improving!";
        msg = "You're doing well, but there's room for improvement! Keep striving.";
    } else if (student.gpa > 3.8) {
        title = "Congratulations!";
        msg = `Great job, ${student.name}! Your outstanding GPA of ${student.gpa} is commendable.`;
    }

    if (student.dueAmount > 0) {
        title = "Payment Reminder";
        msg += ` Also, you have a due amount of ${student.dueAmount} BDT. Please clear it soon.`;
    }

    return { ...student, title, msg };
});

console.log("📧 Email Templates:", emailTemplates);

/** 7️⃣ Group Students by Email Provider */
const groupedByEmail = studentArray.reduce((acc, student) => {
    const domain = student.email.split('@')[1]; // Extract domain
    if (!acc[domain]) {
        acc[domain] = [];
    }
    acc[domain].push(student.name);
    return acc;
}, {});

console.log("📨 Students Grouped by Email Provider:", groupedByEmail);
