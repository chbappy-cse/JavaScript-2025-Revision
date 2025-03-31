/**
 * Understand and Implement Linear Search
 */

const arr = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90];
const team = [
    {id: 2, name: 'Ashraf'},
    {id: 1, name: 'Hasan'},
    {id: 5, name: 'Bappy'},
    {id: 3, name: 'Washi'},
    {id: 4, name: 'Abid'},
];

const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
};

const s1 = linearSearch(arr, 2);
// console.log(s1);

const linearSearchCB = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            return i;
        }  
    }
    return -1;
};

const s3 = linearSearchCB(team, (item) => item.name === 'Bappy');
const s4 = linearSearchCB(team, (item) => item.id === 3);
// console.log(s3, s4);

/**
 * Implement Binary Search
 */

let array = [12, 3, 1, 32, 65, 78, 98, 90, 100];
const binarySearch = (arr1, key1) => {
    let lowest = 0;
    let highest = arr1.length - 1;

    while(lowest <= highest){
        let mid = Math.floor((lowest + highest) / 2);
        if(arr1[mid] === key1) return mid;
        if(arr1[mid] < key1) lowest = mid + 1;
        if(arr1[mid] > key1) highest = mid - 1;
    }
    return -1;
}

array.sort((a, b) => a -b);
console.log(array);

const index = binarySearch(array, 12);
console.log(index);





