// Write a function to count the number of vowels in a string.

const str = 'saiful islam';

function countVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (const str of string) {
        if (vowels.includes(str)) {
            count++
        }
    }

    return count;
}

console.log('total vowels in this string is: ' + countVowels(str));