/* 
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: const numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/

const strings = ['Tom', 'Tim', 'Tin', 'Tik'];

let concate_string = '';

for(const string of strings){
    concate_string +=  string;
}

console.log(concate_string)