//
// Object - Destructuring
//

// const person = {
//     name: 'Mike',
//     age: 29,
//     location: {
//         city: 'Toronto',
//         temp: 21
//     }
// };

// // Through ES6
// // set default and rename on name
// const {name: firstname ='Annonymous', age} = person;
// // Rename temp to temprature from now on
// const {city, temp: temprature} = person.location;

// // is equivalent to
// //const name = person.name;
// //const age = person.age;

// console.log(`${firstname} is ${age}`);

// if (city && temprature)
//     console.log(`It's ${temprature} in ${city}`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher : {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;


// console.log(publisherName);


//
// Array Destructuring
//

const address = [, 'Toronto', 'Ontario', 'M1L4P3'];

const [ address1="3 Yonge St", , province, postalcode] = address;

console.log(province);
console.log(address1);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ product, small, medium, large ] = item;

console.log(`A medium ${product} cost ${medium}`);
