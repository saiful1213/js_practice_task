// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


let str = 'heXa max tax';

for (const letter of str) {
    if (letter === 'x') {
        str = str.replace('x', 'y');
    }
    else if (letter === 'X') {
        str = str.replace('X', 'Y');
    }
}

console.log(str)
