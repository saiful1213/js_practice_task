/* 
4. Checking if it's an Array

    i.) Create different variables, each containing either an array or a non-array value.

    ii.) Now use isArray to check if each variable is an array.

    iii.) Print a message to the console indicating whether each variable is an array or not. 
*/

const name = 'saiful';
const age = 22;
const maritialStatus = null;
const isSingle = true;
const friends = ['mamun', 'salma', 'ibrahim'];
const walletNow = {};


console.log(Array.isArray(friends) ? 'this variable is an array' : 'this is not an array');
