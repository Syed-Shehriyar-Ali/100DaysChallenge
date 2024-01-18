// question no 1 //

// How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?  

// map method//
// solution 

const peoples = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
  ];
  
  // Using map to extract names
  const names = peoples.map(person => person.name);
  
  console.log(names); 
  
// Output: ['John', 'Alice', 'Bob']//

// question no  2//

//Explain the purpose of the `filter` method. Provide an example where you use  `filter` to extract elements from an array based on a specific condition?
    // filter method //
// solution 


const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to extract even numbers
const evenNumbers = numbers1.filter(number => number % 2 === 0);

console.log(evenNumbers);

 // Output: [2, 4, 6, 8, 10]//


 // question no  3//

//  Discuss the default behavior of the  `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?
 // sort method //
// solution 

const fruits = ['banana', 'apple', 'orange', 'grape'];

fruits.sort();
console.log(fruits);

// Output: ['apple', 'banana', 'grape', 'orange']//

// array sort//

const numbers = [5, 20, 10, 3];

numbers.sort((a, b) => a - b);
console.log(numbers);

// Output: [3, 5, 10, 20]//

// object sort//

const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 }
  ];
  
  // Sorting by age in ascending order//

  people.sort((a, b) => a.age - b.age);
  
  console.log(people);
 
  // Output: [
  //   { name: 'Bob', age: 22 },
  //   { name: 'John', age: 25 },
  //   { name: 'Alice', age: 30 }
  // ]


// question no  4//

// Describe the purpose of the `reduce ` method and provide an example where you use it to compute a single value from an array of numbers?
  //reduce method //
// solution 

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 5);

console.log(sum); 

// Output: 20//

// question no  5//

//  How does the `find`  method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`?
// solution 

/*filter Method
The filter method is used to create a new array by filtering out elements from an existing array based on a specified condition. It returns an array containing all elements that meet the given condition. If no elements match the condition, an empty array is returned.

Example:*/

const numbers3 = [1, 2, 3, 4, 5];

const evenNumbers1 = numbers3.filter(number => number % 2 === 0);

console.log(evenNumbers1); // Output: [2, 4]

// In this example, filter is used to create a new array containing only the even numbers from the original array.

/*find Method:
The find method, on the other hand, is used to find the first element in an array that satisfies a given condition. It returns the first element that matches the condition, and if no element is found, it returns undefined.

Example:*/


const numbers4 = [1, 2, 3, 4, 5];

const firstEvenNumber = numbers4.find(number => number % 2 === 0);

console.log(firstEvenNumber); 

// Output: 2

// In this example, find is used to find the first even number in the array.


// question no  6//

// Create a chain of array methods (`map`,` filter`, `reduce`, etc.) to transform an array of strings into a single concatenated string with a specific condition?
    // combining method //
// solution 

// combining methods //
const strings = ['apple', 'banana', 'kiwi', 'grape', 'orange'];

const concatenatedString = strings
  .filter(str => str.length > 3) // Keep strings with length greater than 3
  .map(str => str.toUpperCase()) // Convert each remaining string to uppercase
  .join(', '); // Join the remaining strings with a comma and space

console.log(concatenatedString);

// Output: "APPLE, BANANA, GRAPE, ORANGE"//



// question no  7//

// Explain the concept of callback function in the context of array methods. Provide an explain of using a callback function with the `map` method?
 // callbacks function //
// solution 

const numbers5 = [1, 2, 3, 4, 5];

const squaredNumbers = numbers5.map((num) => {
  return num ** 2;
});

console.log(squaredNumbers);


// Output: [1, 4, 9, 16, 25]//


// question no  8//

// Error handling//

// How would you handle potential errors when using array methods like `find` or `reduce`? Provide an example of error handling in such a scenario?  

// solution 

const numbers6 = [1, 2, 3, 4, 5];

try {
  const sumOfSquares = numbers6.reduce((accumulator, currentValue) => {
    if (typeof currentValue !== 'number') {
      throw new Error('Invalid input: Array mein non-numeric value mojood hai.');
    }
    return accumulator + currentValue ** 2;
  }, 0);

  console.log(sumOfSquares);
} catch (error) {
  console.error('Error:', error.message);
}

// output 55 //


// question no  9//

// Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`?
 // immutable operations
// solution //

// Using map:

const originalArray1 = [1, 2, 3, 4, 5];

// Immutably square each number using map
const newArray1 = originalArray1.map((num) => num ** 2);

console.log(originalArray1); 

// Original array remains unchanged: [1, 2, 3, 4, 5]//

console.log(newArray1);      

// New array with squared values: [1, 4, 9, 16, 25]//

// Using filter:


const originalArray = [1, 2, 3, 4, 5];

// Immutably filter even numbers using filter
const newArray = originalArray.filter((num) => num % 2 === 0);

console.log(originalArray);

// Original array remains unchanged: [1, 2, 3, 4, 5]//

console.log(newArray);     

// New array with even numbers: [2, 4] //

// question no  10//

// Compare the performance implications of using `map` versus `forEach`. In what scenario would you prefer one over the other, and why?
 // performance considerations// 
// solution //

/*Performance Implications:
map ki Performance:

Memory: map ek naya array banata hai, is liye ye additional memory consume karta hai new array ko store karne ke liye.
Use Case: map ka istemal tab karein jab aap har element ko ek new value mein transform karna chahte hain aur ek naya array banane ki zarurat hai.
forEach ki Performance:

Memory: forEach koi naya array nahi banata; ye seedhe existing array par operate karta hai.
Use Case: forEach ka istemal tab karein jab aap array par iterate karke side effects (e.g., logging, elements ko modify karna) perform karna chahte hain bina kisi new array banaye.*/

//using map//
const numbers7 = [1, 2, 3];
const doubledNumbers = numbers7.map(num => num * 2);

 console.log(numbers7);

 ///output[ 1, 2, 3 ] ///

 console.log(doubledNumbers);

 /// output [ 2, 4, 6 ] ///

//using for each//

const numbers8 = [1, 2, 3];
 numbers8.forEach((num, index, array) => { array[index] = num * 2; });

console.log(numbers8);

 /// output [ 2, 4, 6 ] ///

// question no  11//

// Given an array of integers, use the `map` method to square each element and return a new array with the squared values?
 
// map transformation// 

// solution //

// Example array of integers

const originalArray2 = [1, 2, 3, 4, 5];

// Use the map method to square each element
const squaredArray = originalArray2.map(number => number * number);

// Display the result
console.log(squaredArray);


// output [ 1, 4, 9, 16, 25 ] ///


// question no  12//

// take an array of string, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method? 

// filter and map combination // 

// solution //

// Example array of strings
const originalArray3 = ["apple", "banana", "kiwi", "orange", "grape"];

// Use the filter method to exclude strings with length less than 5
// Then use the map method to capitalize the remaining strings
const resultArray = originalArray3
.filter(str => str.length >= 5)
.map(str => str.toUpperCase());

// Display the result
console.log(resultArray);

///output [ 'APPLE', 'BANANA', 'ORANGE', 'GRAPE' ] ///


// question no  13//

// Given an array of objects with a 'price' property, use the  `sort` method to arrange them in descending order based on their prices?

// sorting objects // 

// solution //

// Example array of objects with 'price' property
const products = [
  { name: 'Product A', price: 25.99 },
  { name: 'Product B', price: 12.49 },
  { name: 'Product C', price: 39.99 },
  { name: 'Product D', price: 17.99 },
];

// Use the sort method to arrange the array in descending order based on 'price'
products.sort((a, b) => b.price - a.price);

// Display the result
console.log(products);

//output//
/* [
  { name: 'Product C', price: 39.99 },
  { name: 'Product A', price: 25.99 },
  { name: 'Product D', price: 17.99 },
  { name: 'Product B', price: 12.49 }
]*/



// question no  14//

// Use the `reduce` method to find the total sum of all even numbers in an array of integers?

// reduce for aggregtion // 

// solution //

// Example array of integers
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the reduce method to find the sum of all even numbers
const sumOfEvens = numbers9.reduce((accumulator, currentValue) => {
  // Check if the current value is even
  if (currentValue % 2 === 0) {
    // Add the even number to the accumulator
    return accumulator + currentValue;
  } else {
    // Otherwise, just return the accumulator unchanged
    return accumulator;
  }
}, 0);

// Display the result
console.log(sumOfEvens);

///output 30 ///

// question no  15//

// Given an array of objects with 'id' properties , use the 'find' method to locate an object with a specific 'id' and update its 'status property to 'completed?

// find and modify // 

// solution //

// Example array of objects with 'id' and 'status' properties
const tasks = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'in progress' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'completed' },
];

// Specify the target 'id' you want to find
const targetId = 3;

// Use the find method to locate the object with the specified 'id'
const targetTask = tasks.find(task => task.id === targetId);

// Update the 'status' property to 'completed' if the object is found
if (targetTask) {
  // Using the spread operator to update the 'status' property
  targetTask.status = 'completed';
} else {
  console.log(`Object with id ${targetId} not found.`);
}

// Display the updated array
console.log(tasks);

// output//

/*[
  { id: 1, status: 'pending' },
  { id: 2, status: 'in progress' },
  { id: 3, status: 'completed' },
  { id: 4, status: 'completed' }
]*/

// question no  16//

// create a chain of array methods to find the average of all positive number in an array of mixed integers and return the result rounded to two decimal places?

// chaining methods  // 

// solution //

// Example array of mixed integers
const numbers10 = [-2, 5, 7, -8, 3, 10, -4, 6];

// Chain of array methods to find the average of positive numbers
const averageOfPositives = numbers10
  .filter(number => number > 0)        // Filter out positive numbers
  .reduce((sum, number, index, array) => sum + number / array.length, 0)  // Calculate average

// Round the result to two decimal places
const roundedAverage = Math.round(averageOfPositives * 100) / 100;

// Display the result
console.log(roundedAverage);

//output 6.2 //

// question no  17//

// implement a function that takes an array of objects with 'age' properties and returns an array of these who are adults (age 18 and above) using the `filter` method? 

// conditional filtering  // 

// solution //

// Example array of objects with 'age' properties
const people1 = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 30 },
  { name: 'Eve', age: 16 },
];

// Function to filter adults based on the 'age' property
function filterAdults(personArray) {
  return personArray.filter(person => person.age >= 18);
}

// Call the function and display the result
const adults = filterAdults(people1);
console.log(adults);

//output [ { name: 'John', age: 25 }, { name: 'Bob', age: 30 } ]//

// question no  18//

// sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array?

// advanced sorting // 

// solution //

// Example array of strings
const strings1 = ["apple", "banana", "kiwi", "orange", "grape"];

// Sort the array based on string lengths in ascending order
const sortedStrings = strings1.sort((a, b) => {
  if (a.length === b.length) {
    // If two strings have the same length, maintain their relative order
    return strings1.indexOf(a) - strings1.indexOf(b);
  } else {
    // Otherwise, sort based on string lengths in ascending order
    return a.length - b.length;
  }
});

// Display the result
console.log(sortedStrings);

//output [ 'kiwi', 'apple', 'grape', 'banana', 'orange' ]//


// question no  19//

// Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers?

// nested array operations // 

// solution //

// Example array of arrays containing numbers
const arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

// Use the concat method to flatten the array structure
const flattenedArray = [].concat(...arrayOfArrays);

// Use the reduce method to calculate the sum of all numbers
const sumOfNumbers = flattenedArray.reduce((sum, number) => sum + number, 0);

// Display the result
console.log(sumOfNumbers);

//output 36//

// question no  20//

// modify the 'find' method to handle the scenario where the desired element is not found, returning a custom default object instead?

// Error handling with find // 

// solution //

// Example array of objects with 'id' properties
const tasks1 = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'in progress' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'completed' },
];

// Specify the target 'id' you want to find
const targetId1 = 5;

// Use the find method to locate the object with the specified 'id' or return a custom default object
const targetTask1 = tasks1.find(task => task.id === targetId1) || { id: -1, status: 'not found' };

// Display the result
console.log(targetTask1);

//output { id: -1, status: 'not found' }//



