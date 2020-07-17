let result = 0;
const getSum = function(m, n) {
    for (let i = m; i <= n; i++) {
        if (i % 2 === 0) {
            result += i;
            continue;
        }
    }
}
let a = getSum(2, 12);
console.log(a = result);