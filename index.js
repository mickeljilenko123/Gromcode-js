const numbers = [11, 22, 33, 44, 66];
let sumOfNumbers = 0;

function getSum(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sumOfNumbers += numbers[i];
    }
    if (!Array.isArray(numbers)) {
        return null;
    } else {

        return sumOfNumbers;
    }
}
const sumOfElements = getSum(numbers);
console.log('Result: ' + sumOfElements);