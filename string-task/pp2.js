// Count how many times a string has the letter a or A

const string = 'abdullAh Al mamun';
let count = 0;

for (const str of string) {
    if (str.toLowerCase() === 'a') {
        count++
    }
}

console.log(count);