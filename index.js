function compareSums(a, b, c, d) {
    function sum1() {
        let result = 0;
        let a;
        let b;
        for (let i = a; i <= b; i++) {
            result += i;
        }
        return result;
    }

    function sum2() {
        let c;
        let d;
        let result = 0;
        for (let i = c; i <= d; i++) {
            result += i;
        }
        return result;
    }

    if (sum1() < sum2()) {
        return true;
    } else {
        return false;
    }
}
console.log(compareSums(2, 9, 4, 15));