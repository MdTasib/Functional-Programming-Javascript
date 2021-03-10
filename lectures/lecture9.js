// Javascript Sort Array of Object
const numbers = [22, 23, 13, 12, 24, 64, 28, 93, 3, 6, 4];

// numbers.sort();
numbers.sort(function (a, b) {
    return a - b;
    // return b - a;
})

console.log(numbers);


const person = [
    { name: 'Tasib', age: 19 },
    { name: 'Rafi', age: 23 },
    { name: 'Rakib', age: 18 },
    { name: 'Ohidul', age: 20 },
    { name: 'Alam', age: 18 },
    { name: 'Taisir', age: 10 },
]

// age sort
person.sort(function (a, b) {
    return b.age - a.age
})
console.log(person)

// name sort
person.sort(function (a, b) {
    if (a.name > b.name) {
        return 1
    } else if (a.name < b.name) {
        return -1
    } else {
        return 0
    }
})
console.log(person);
