// Count how many times a string has the letter a

const name = 'saiFul islam';

// method 1
// console.log(name.split('a').length-1);

// mehtod 2
let count = 0;

for (letter of name) {
    if (letter === 'a') {
        count++
    }
}

console.log(count);

