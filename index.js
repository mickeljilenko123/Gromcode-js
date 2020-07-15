const m = 10;
const n = 48;
let a = 10;
let sum = 0;
let result = 0;
for (a = 10; a <= n; a++) {
    if (a % 2 === 0 && a % 4 !== 0) {
        sum += a;
    }
    if (a % 3 === 0) {
        sum -= a;
    }
    if (a % 4 === 0) {
        sum *= a;

    }
    if (a % 5 === 0) {
        console.log(a);
    }
    sum = result;
}