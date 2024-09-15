// display odd number from 55 to 85 and skip the numbers divisible by 5.

// method 1
for (let n = 55; n <= 85; n++) {
    if (n % 5 === 0) {
        continue;
    }
    if (n % 2 !== 0) {
        console.log(n)
    }
}



// method 2
for (let n = 55; n <= 85; n++) {
    if (n % 2 !== 0 && n % 5 !== 0) {
        console.log(n);
    }
}

