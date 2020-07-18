function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return 'true';
    } else {
        return 'false';
    };
}
console.log(compareSums(2, 9, 4, 15));



function sum(from, to) {
    let result = 0;
    for (let i = from; i <= to; i++) {
        result += i;
    }
    return result;
}