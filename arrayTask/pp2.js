/* 
2. Add or remove elements
    i.) Declare an array of 3 tourist destinations
    ii.) Add a new tourist destination to your tourist array
    iii.) Add two more to your array
    iv.) Remove the last tourist destination you have added
    v.) display the final array as output 
*/

const touristDestinations = ['coxBazar', 'jaflong', 'sajek'];

touristDestinations.push('sundorbon');

touristDestinations.push('kuakata', 'dcPark');

touristDestinations.pop();

console.log(touristDestinations);