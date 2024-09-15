// Check whether a string contains all the vowels a, e, i, o, u

const string = 'saiful islam robin';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let voweledStr;

for (const vowel of vowels) {
    if (!string.includes(vowel)) {
        voweledStr = false;
        break;
    }
    else {
        voweledStr = true;
    }
}

console.log(voweledStr);
