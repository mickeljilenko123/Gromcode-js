const numbers = [11, 22, 33, 44, 66];
let sumOfNumbers = 0;

function getSum(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sumOfNumbers += numbers[i];
    }
    return sumOfNumbers;
}
console.log(getSum(numbers));