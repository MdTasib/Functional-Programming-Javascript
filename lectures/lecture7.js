// Javascript Return a Function from Another Function
function host(name) {
    return function () {
        console.log('Hello ' + name);
    }
}
let a = host('Tasib');
a()



// *************** //

function greeting(massage) {
    return function (name) {
        console.log(massage + ' ' + name);
    }
}

let good = greeting('Good Morning, ');
let hello = greeting('Hello, ')

good()
hello()

good('Ohidul')
hello('Ohidul')