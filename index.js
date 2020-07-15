let m = 10;
let n = 40;
let result = 0;

do {
    if (m % 2 === 0 && m % 4 !== 0) {
        result += m;
        console.log(m);
    } else if (m % 3 === 0) {
        result -= m;
        console.log(m);
    } else if (m % 4 === 0) {
        result *= m;
        console.log(m);
    } else if (n % 5 === 0) {
        console.log(m);
    }
    m++;
} while (m <= n);