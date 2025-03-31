/**
 * Example Frequency Checker
 */
const votes = [
    'Java',
    'Java',
    'Python',
    'Java',
    'JavaScript',
    'Python',
    'JavaScript',
];

const result = votes.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++;
    }else{
        acc[curr] = 1;
    }
    return acc;
}, {});

console.log(result);
