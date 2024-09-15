/* Find the friend with the smallest name. */

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(arr) {
    let smallestName = arr[0];

    for (const name of arr) {
        if (name.length < smallestName.length) {
            smallestName = name
        }
    }
    return smallestName;
}

console.log(findSmallestName(heights2));