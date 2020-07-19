function findDivCount(a, b, n) {
    for (let i = a; i < b; i++) {
        if (i % n === 0) {
            while (i < n) {
                i++;
            }
        }
        return i;

    }

}
console.log(findDivCount(2, 9, 3));