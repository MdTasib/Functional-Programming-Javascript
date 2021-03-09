// javascript Higher Order Function
function func() {
    return function (name) {
        return `Hello , ${name}`
    }
}

let x = func();
let y = x('Ohidul');
console.log(y);

let a = func()('Tasib');
console.log(a)