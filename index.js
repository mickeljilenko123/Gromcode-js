let summ = 0;
const getSum = function(m, n) {
    for (let i = m; i <= n; i++) {
        if (i % 2 === 0) {
            summ += i;
        }
    }
    return summ;
}
console.log(getSum(2, 12));