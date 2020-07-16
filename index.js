let result = 0;

for (let n = 0; n <= 1000; n++) {
    if (n % 2 === 1) {
        console.log('Found');
        continue;
    }
    result += n;
}

if (result * 5 > 5000) {
    console.log('Bigger');
} else {
    console.log("Smaller or equal");
}