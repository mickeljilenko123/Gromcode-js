const m = 10;
const n = 48;
let a = m;
let result = 0;

for (a = m; a <= n; a++) {
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
}