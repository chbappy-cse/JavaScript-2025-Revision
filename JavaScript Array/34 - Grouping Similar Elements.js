/**
 * Grouping Similar Elements
 */

const words = [
    'Test Words',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Ch Bappy',
];

const group = words.reduce((acc, curr) => {
    const currentLength = curr.length;
    if (acc[currentLength]) {
        acc[currentLength].push(curr);
    }else{
        acc[currentLength] = [curr];
    }
    return acc;
}, {});

console.log(group);



