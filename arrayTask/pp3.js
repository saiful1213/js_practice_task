/* 
3. Checking Array Membership with ‘includes’

    i.) Create an array of books containing different book.

    i.) Use the includes method to check if the array contains a javascript book.

    iii.) Print a message to the console indicating whether the element is present in the array or not.
*/

const books = ['Eloquent JavaScript', 'paradoxical sajid', 'sura: the phanoragames'];

const isJsBookExist = books.includes('Eloquent JavaScript');

console.log(isJsBookExist ? 'the book is exist' : 'the book dont exist')