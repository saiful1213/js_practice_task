// Capitalize Every first Letter of each word in a String

let name = 'saiful islam robin';

const arrStr = name.split(' ');

for (const word of arrStr) {
    name = name.replace(word[0], word[0].toUpperCase());
}

console.log(name);