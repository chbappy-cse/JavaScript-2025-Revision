/**
 * Generating Markup from List
 */

const links = [
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'YouTube', url: 'https://youtube.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'},
    {name: 'X', url: 'https://x.com'},
];

let template = `<ul>{{links}}</ul>`;

const linkList = links.reduce((acc, curr) => {
    acc += `<li><a href="${curr.url}">${curr.name}</a></li>`;
    return acc;
}, '');

template = template.replace('{{links}}', linkList);
console.log(template);
