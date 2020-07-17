let result = 0;
let bool

for (let n = 0; n <= 1000; n++) {
    result += n;
    bool = (result % 1234 === 0 || result % 1234 === 1)
}
console.log(bool);