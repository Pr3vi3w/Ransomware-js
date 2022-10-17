# Ransomware-js
A simple JavaScript ransomware
// instead of if (accessible) { console.log("It’s open!"); } // use accessible && console.log("It’s open!");
// instead of if (price.data) { return price.data; } else { return 'Getting the price’'; } // use return (price.data || 'Getting the price');
// instead of Math.floor(Math.random() * 50); // 
use ~~(Math.random()
 * 50); // You can also use the ~~ operator to convert anything into a number value. // Example snippet: 
~~('whitedress') // returns 0 
~~(NaN) // returns 0
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
 console.log(array.length); // returns the length as 10 
array.length = 4; 
console.log(array.length); // returns the length as 4 console.log(array); // returns ['a', 'b', 'c', 'd']
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
 array.length = 0; console.log(array.length);
 // returns the length as 0 console.log(array); 
//let list1 = ['a', 'b', 'c', 'd', 'e'];
let list2 = ['f', 'g', 'h', 'i', 'j']
console.log(list1.concat(list2)); // returns the merged values of both arrays, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] returns []
const cars = [ { make: 'Opel', class: 'Regular' }, { make: 'Bugatti', class: 'Supercar' }, { make: 'Ferrari', class: 'Supercar' }, { make: 'Ford', class: 'Regular' }, { make: 'Honda', class: 'Regular' }, ] const supercar = cars.filter(car => car.class === 'Supercar'); console.table(supercar); // returns the supercar class data in a table format

const cars = [ { make: 'Opel', class: 'Regular' }, null, undefined ] cars.filter(Boolean); // returns [{ make: 'Opel', class: 'Regular' }]
const carSerial = serials.getElementById('serial1234'); carSerial.addClass('cached-serial1234');

Object.keys(objectName).length // if it returns 0 then the Object is empty, otherwise it displays the number of values

"""""Minimize your files and give the desired file extension to the script"""""
