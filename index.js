function compareSums(a, b, c, d) {
    function sum1() {
        return a + b;
    }

    function sum2() {
        return c + d;
    }

    if (sum1() < sum2()) {
        return true;
    } else {
        return false;
    }
}
console.log(compareSums(2, 9, 4, 15));