let result = 0;

function getSum(m, n) {
    for (let i = m; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
            result += i;
        }
    }
}
getSum(2, 4);
console.log(result);