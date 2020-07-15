const n = 40;
let result = 0;

for (let m = 10; m <= 20; m++) {
    if (m % 2 === 0 && m % 4 !== 0) {
        result += m;
    } else if (m % 3 === 0) {
        result -= m;
    } else if (m % 4 === 0) {
        result *= m;
    } else if (m % 5 === 0) {
        console.log(m);
    }

}

console.log('Result: ' + result);