// // const numbers = [11, 22, 33, 44, 66];

// // function getArrayBound(arr) {
// //     return [arr.length, arr[0], arr[arr.length - 1]];
// // }
// // const arrayBound = getArrayBound(numbers);
// // console.log(arrayBound);

// // arr.length - // получить длинну масива;
// //     arr[0] - //Получить первый масив;
// //     arr[arr.length - 1] - //Получить последний масив;
// //     Array.isArray(arr) - //Проверка масив или не масив

// //Перебор массива.
// // 1) Перебрать массив и найти сумму всех елементов.
// const numbers = [11, 22, 33, 44, 66];
// let sumOfNumbers = 0;

// function sum(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         sumOfNumbers += numbers[i];
//     }

//     return sumOfNumbers;
// }
// const sumOfElements = sum(numbers);
// console.log('Result: ' + sumOfElements);

// // Методы массивов
// // Функция которая from , to => [n%3 ===0]
// function getSpecialNumbers(from, to) {
//     let specialNumbers = [];
//     for (let i = from; i <= to; i++) {
//         if (i % 3 === 0) {
//             specialNumbers.pop(i);
//         }
//     }
//     return specialNumbers;
// }
// const specialNumbers = getSpecialNumbers(10, 30);
// console.log(specialNumbers);


// Елемент из начала переносить в конец
function swap(arr) {
    const [start, ...rest] = arr; // 
    return [...rest, start];
}

console.log(swap(numbers));