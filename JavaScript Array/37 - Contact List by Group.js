/**
 * Contact List by Group
 */

const contacts = [
      { name: "John Doe", email: "johndoe@example.com", phone: "+1-555-1234" },
      { name: "Jane Smith", email: "janesmith@example.com", phone: "+1-555-5678" },
      { name: "Alice Johnson", email: "alicejohnson@example.com", phone: "+1-555-9101" },
      { name: "Bob Brown", email: "bobbrown@example.com", phone: "+1-555-1122" },
      { name: "Charlie Davis", email: "charliedavis@example.com", phone: "+1-555-3344" },
      { name: "Diana Wilson", email: "dianawilson@example.com", phone: "+1-555-5566" },
      { name: "Ethan Martinez", email: "ethanmartinez@example.com", phone: "+1-555-7788" },
      { name: "Fiona Taylor", email: "fionataylor@example.com", phone: "+1-555-9900" },
      { name: "George Anderson", email: "georgeanderson@example.com", phone: "+1-555-2233" },
      { name: "Hannah Thomas", email: "hannahthomas@example.com", phone: "+1-555-4455" },
      /* ...Array.from({ length: 90 }, (_, index) => ({
        name: `User${index + 11}`,
        email: `user${index + 11}@example.com`,
        phone: `+1-555-${Math.floor(1000 + Math.random() * 9000)}`
      })) */
    ];
// console.log(contacts);
contacts.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});

const group = contacts.reduce((acc, curr) =>{
    let groupName = curr.name.charAt(0).toLocaleUpperCase();
    if (acc[groupName]) {
        acc[groupName].push(curr);
    }else{
        acc[groupName] = [curr];
    }

    return acc;
}, {});

// console.log(group);

const displayList = (group) => {
    console.log('Displaying Contact Information');
    console.log('-----------------------------------');

    const keys = Object.keys(group);
    keys.forEach((key) => {
        console.log(`Group: ${key}`); 
        console.table(group[key]);
    });
}
displayList(group);

