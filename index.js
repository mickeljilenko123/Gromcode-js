let m = 10;
let n = 20;
let result = 0;

do {
    if (n % 2 === 0 && n % 4 !== 0) {
        result += n;
        console.log(n);
    } else if (n % 3 === 0) {
        result -= n;
        console.log(n);
    } else if (n % 4 === 0) {
        result *= n;
        console.log(n);
    } else if (n % 5 === 0) {
        console.log(n);
    }
    n--
} while (n >= m);