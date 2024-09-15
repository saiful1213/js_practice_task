// Find the lowest number in the array below.


const heights2 = [167, 190, 120, 165, 137, 5];

function findMinNum(arr) {
    let min = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num
        }
    }
    return min;
}

console.log(findMinNum(heights2));