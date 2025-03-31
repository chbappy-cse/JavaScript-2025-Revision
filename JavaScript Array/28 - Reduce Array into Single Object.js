/**
 * Reduce Array into Single Object
 */

let products = [
    {name: 'JavaScript Cookbook', price: 350},
    {name: 'Hands First Python', price: 200},
    {name: 'Hands First Java', price: 350},
    {name: 'Hands First Java', price: 350},
    {name: 'Hands First PHP', price: 250},
    {name: 'Nodejs Cookbook', price: 350},
    {name: 'Hands First React', price: 200},
    {name: 'Hands First React', price: 200},
    {name: 'Hands First React', price: 200},
    {name: 'Hands First React', price: 200},
    {name: 'Hands First Vue', price: 350},
    {name: 'Hands First Next', price: 250},
    {name: 'JavaScript Cookbook', price: 350},
];

const invoice = products.reduce((acc, curr) => {
    if (acc[curr.name]) {
        acc[curr.name].quantity++;
        acc[curr.name].price += curr.price;
    }else{
        acc[curr.name] = {
            price: curr.price,
            quantity: 1
        }
    }
    return acc;
}, {});

console.log(invoice);
