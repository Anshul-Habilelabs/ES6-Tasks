// ===============MapPolyFill===============
let arr1 = [1, 2, 3, 4, 5];
function mapPolyFill(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
    }
    return newArr;
}
function cubeFn(a) {
    return a * a * a;
}
console.log(mapPolyFill(arr1, cubeFn));

// =====================reducePolyFill===============
let arr2 = [1, 2, 3, 4, 5];

function reducePolyFill(arr, cb, initialValue = arr[0]) {
    let accumulator = initialValue;
    for (let i = 1; i < arr.length; i++) {
        accumulator = cb(arr[i], accumulator);
    }
    return accumulator;
}
function sum(x, accumulator) {
    return (x + accumulator);
}
console.log(reducePolyFill(arr2, sum));

// ==============filterPolyFill====================
let arr3 = [1, 2, 3, 4, 5];
function filterPolyFill(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(cb(arr[i]));
        }
    }
    return newArr
}
function odd(n) {
    if (n % 2 == 1) return n;
}
console.log(filterPolyFill(arr3, odd))