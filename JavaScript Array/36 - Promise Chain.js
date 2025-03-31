/**
 * Promise Chain
 */

function createPromise(id) {
    const randTime = Math.floor(Math.random() * 2000 + 100);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Processing ${id} - Time ${randTime}`);
            resolve(id);
        }, randTime)
    });
}

const ids = [1, 2, 3, 4, 5, 6];
/* ids.forEach((v) => {
    createPromise(v);
})
 */


const result = ids.reduce((acc, curr) =>{
    return acc.then(()=>{
        return createPromise(curr);
    });
}, Promise.resolve());

result.then(()=>{
    console.log('Done!!!');
})