const m = 5;
const n = 35;
let result = 0;
for (let a = m; a <= n; a++) {
    if (a % 5 === 0) {
        console.log(a);
        continue;
    }
    if (a % 2 === 0 && a % 4 !== 0) {
        result += a;
        continue;
    }
    if (a % 3 === 0) {
        result -= a;
        continue;
    }
    if (a % 4 === 0) {
        result *= a;
        continue;
    }

}