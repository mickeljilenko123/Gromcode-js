let result = 0;

const getSum = function(m, n) {
    for (let i = m; i <= n; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    console.log(result);
}
getSum(2, 12);