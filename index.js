let m = 5;
let n = 35;
let result = 0;
for (let i = m; i <= n; i++) {
    if (i % 2 == 0 && i % 4 != 0) {
        result = result + i;
    }
    if (a % 3 == 0) {
        result = result - i;
    }
    if (a % 4 == 0) {
        result = result * i;
    }
    if (i % 5 == 0) {
        console.log(i);
    }

}