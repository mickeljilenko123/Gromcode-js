const numbers = [11, 22, 33, 44, 66];

function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    } else {
        return [arr.length, arr[0], arr[arr.length - 1]];
    }
}
const arrayBounds = getArrayBounds(numbers);
console.log(arrayBounds);