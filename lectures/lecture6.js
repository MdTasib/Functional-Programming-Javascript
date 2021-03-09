// Javascript Callback Function Postmortem
function hello(name, print) {
    print(name);
}

// hello('Tasib', print);

// function print(args) {
//     console.log(args)
// }


hello('Ohidul', function (name) {
    console.log(`Hello ${name}`)
})

hello('Tasib', function (name) {
    console.log(`Hey ${name}`)
})

hello('Ohidul Alam Tasib', function (name) {
    console.log(`Name is ${name}, amd Name langth is ${name.length}`)
})


// *********** //
const me = {
    name: 'Tasib',
    age: 19,
    email: 'ohidulalam442@gmail.com'
}

function printMe(person, callback) {
    console.log(`Person ${person.name}. Age is ( ${person.age} )`);
    if (person.age >= 18) {
        callback(person.email)
    } else {
        console.log(`Try agian ${18 - person.age} years`);

    }
}

printMe(me, function (email) {
    console.log(`Email send to ${email}`);

})

// *********** //
function print(data, cb1, cb2) {
    console.log(`This is original data : ${data}`)
    cb1(data)
    cb2(data)
}

print('hey! mohammad Tasib', function (data) {
    const newData = data.toUpperCase();
    console.log(`Uppercase : ${newData}`);

}, function (data) {
    const newData = data.toLowerCase();
    console.log(`Lowercase : ${newData}`);

})