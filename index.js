const m = 2;
const n = 50;
let result = 0;
for (let a = m; a <= n; a++) {
    if (a % 2 === 0 && a % 4 !== 0) {
        result += a;
    } else if (a % 3 === 0) {
        result -= a;
    } else if (a % 4 === 0) {
        result *= a;

    }
    if (a % 5 === 0) {
        console.log(a);
    }
    result = a;
}