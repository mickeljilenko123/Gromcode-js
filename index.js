let result = 0;

function getSum(m, n) {
    for (let i = m; i <= n; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    console.log(result);
}
getSum(2, 12);