// avascript Inner Function
function outer() {
    const number = 10;

    function inner() {
        console.log(number);

        console.log('i am inner function');
    }
    inner()
    console.log('i am outer function');
}
outer()


// example two
function number(a, b) {
    function sum() {
        return a + b
    }
    return sum();
}
console.log(number(5, 6));

