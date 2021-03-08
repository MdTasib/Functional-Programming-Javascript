// Javascript First Class Function
function sayName(name) {
    return 'Hello, ' + name
}

var hello = sayName;

// console.log(hello);
// var fun = sayName('Ohidul Alam');
// console.log(fun);
var x = hello;
var y = x('Ohidul Alam')
console.log(y);