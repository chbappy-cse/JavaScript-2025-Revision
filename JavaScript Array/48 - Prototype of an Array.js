/**
 * Prototype of an Array
 */
const arr = [1, 2, 3, 4];
console.log(arr.constructor.prototype);
console.log(Array.prototype);

console.log(Object.getOwnPropertyNames(Array.prototype));

Array.prototype.log = function () {
    console.log(this.join(' | '));
};

arr.log();
const names = ['Bappy', 'Abid', 'Ashraf', 'Washi'];
names.log();

Array.prototype.loop = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};

names.loop((v) => {
    console.log(`My Name is ${v}`);  
});

arr.loop((v) => {
    console.log(`V = ${v} v*2 = ${v*2}`);
});

