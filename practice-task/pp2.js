/* 
You are given an array of numbers. Count how many times that number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function countRepeatedNums(arr, number) {
    let count = 0;
    for (const item of arr) {
        if (item === number) {
            count++
        }
    }
    return count;
}

const numbers = [5, 6, 11, 5, 12, 98, 5];
console.log(countRepeatedNums(numbers, 12));
