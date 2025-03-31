/**
 * Combining Data from Different Sources
 */

const courses = [
    {
        id: 'OC1',
        name: 'JavaScript All You Need to Know',
        topic: 'JavaScript',
        price: 2599,
    },
    {
        id: 'OC2',
        name: 'Dive into NodeJs',
        topic: 'NodeJs',
        price: 2599,
    },
    {
        id: 'OC3',
        name: 'Understand ReactJs Core Features',
        topic: 'ReactJs',
        price: 1799,
    },
    {
        id: 'OC4',
        name: 'Understand ReactJs Advanced Features',
        topic: 'ReactJs',
        price: 2599,
    },
    {
        id: 'OC5',
        name: 'Add to Cart - MERN Project.',
        topic: 'mern',
        price: 4099,
    },
    {
        id: 'OC6',
        name: 'Make Fun of JavaScript Array',
        topic: 'mern',
        price: 1799,
    },
];

const discountedPrice = {
    OC1: 2099,
    OC2: 2099,
    // OC3: 1399,
    OC4: 2099,
    // OC5: 3599,
    OC6: 1399,
};

const updatedCourse = courses.reduce((acc, curr) => {
    if (discountedPrice[curr.id]) {
        curr.discountedPrice = discountedPrice [curr.id];
    }else{
        curr.discountedPrice = 0
    }
    acc.push(curr);
    return acc;
}, []);

console.log(updatedCourse);
