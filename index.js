const numbers = [11, 22, 33, 44, 66];

function getSum(numbers) {
    let sumOfNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfNumbers += numbers[i];
    }
    if (!Array.isArray(numbers)) {
        return null;
    }
    return sumOfNumbers;
}
console.log(getSum(numbers));