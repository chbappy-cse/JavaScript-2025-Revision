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

const emailTemplates = studentArray.filter((value) => value.gpa < 3).map((value) => {
    return{
        ...value,
        title: 'Result Published',
        msg: 'You have Failed',
    }
});

console.log(emailTemplates);
