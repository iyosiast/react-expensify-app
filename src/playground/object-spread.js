const user = {
    name: 'Jen',
    age: 24
};

// age has to come after the spread
console.log({
    ...user, 
    location: 'Toronto', 
    age: 27
});