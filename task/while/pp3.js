// Subtask-1:
// Display sum of all the odd numbers from 81 to 131.

let number = 81;
let sum = 0

while (number <= 131) {
    if (number % 2 !== 0) {
        sum += number
    }

    number++
}

console.log(sum)




// Subtask-2:
// Display sum of all the even numbers from 206 to 311.

let num = 206;
// let sum = 0;

while (num <= 311) {
    if (num % 2 === 0) {
        sum += num
    }

    num++
}

console.log(sum)