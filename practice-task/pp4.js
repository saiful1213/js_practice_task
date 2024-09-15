/* 
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function findLargestWord(string) {

    const strArr = string.split(' ');
    // ['I', 'am', 'learning', 'Programming', 'to', 'become', 'a', 'programmer'];
    let largestWord = strArr[0];

    for (const item of strArr) {
        if (largestWord.length < item.length) {
            largestWord = item
        }
    }
    return largestWord;
}

const string = 'I am learning Programming to become a programmer';
console.log(findLargestWord(string));