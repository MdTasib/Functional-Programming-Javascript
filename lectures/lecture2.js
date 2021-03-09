// Javascript First Class Function
function sayName(name) {
    return 'Hello, ' + name
}

var hello = sayName;

// console.log(hello);
// var fun = sayName('Ohidul Alam');
// console.log(fun);
var x = hello;
var y = sayName('Ohidul Alam')
console.log(y);

/////

let arr = [1, 2, 3, 4];
arr.push(y);
console.log(arr);

/////

const person = {
    name: 'Tasib',
    func: sayName('Ohidul'),
    print: function () {
        console.log('Ohidul alam Tasib')
    }
}
console.log(person)


//// 
let sum = 10 + (function () { return 50 })();
console.log(sum)

///

function wow(name, fun) {
    return fun(name)
}
let result = wow('Ohidul', sayName);
console.log(result);
