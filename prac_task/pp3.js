// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, arrSize) {
    let sum = 0;
    for (const num of arr) {
        sum += num
    }
    const avg = sum / arrSize;
    return avg
}

const numbers = [25, 86, 5, 98, 3, 86];

const average = make_avg(numbers, numbers.length);

console.log(average)