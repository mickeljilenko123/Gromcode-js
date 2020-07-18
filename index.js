function sum(from, to) {
    return from + to;
}

function compareSums(a, b, c, d) {
    let result;
    result = (sum(a, b) || sum(c, d));
    return result;
}
console.log(compareSums(1, 2, 3, 4));