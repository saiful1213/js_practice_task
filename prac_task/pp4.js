// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(binaryStr) {

    let arrOfZero = [];

    for (const singleBinary of binaryStr) {

        if (parseInt(singleBinary) === 0) {
            arrOfZero.push(singleBinary);
        }
    }

    return arrOfZero.length;
}

const totalZero = count_zero('010110101010');
console.log(totalZero);