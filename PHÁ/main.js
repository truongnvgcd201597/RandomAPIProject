let person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    },
    'iu': 40
};

let person2 = Object.assign(person);
console.log(person2);
console.log(Object.entries(person2));


