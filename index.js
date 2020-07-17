let result = 0;

function getSum(m, n) {
    for (let i = m; i <= n; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
}
getSum(10, 30);
console.log(result);