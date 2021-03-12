// Javascript Foreach Function Implementation
const array = [8, 9, 1, 2, 3, 4, 5, 6, 7];

// building forEach method
// array.forEach((value, index, arr) => {
//     console.log(`value = ${value}, index = ${index}, arr = ${arr}`);
// })

// implementation forEach

function loop(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

loop(array, function (element, i, arr) {
    console.log(`Element is ${element}, Index is ${i}, array is ${arr}`);
})