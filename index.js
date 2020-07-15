const m = 20; //Начальное значение
const n = 30;
let a = 20;
let result = 1;

do {
    if (a % 2 === 1) {
        result *= a;
    }
    a++; //При каждой итерации мы будем увиличиавть
} while (a <= n); // n = граничное 

console.log('Result: ' + result);