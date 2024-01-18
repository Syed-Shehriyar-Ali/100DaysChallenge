// assignment 2 //


 // question no:1 //

 //rewrite the following code using a ternary operator//

 /// solved ///


 let num = 70;

 let result;


 let anw = (num >=80)? result ="pass": result= "failed";

 console.log(anw);


 ///output///

//  failed //


// question no:2 //

//how dose the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?//

///solved///

const person = {
    name: "John",
    address: {
      city: "New York",
      zipCode: "10001"
    }
  };
  
  // Without optional chaining
  const zipCodeWithoutOptionalChaining = person.address ? person.address.zipCode : undefined;
  console.log(zipCodeWithoutOptionalChaining);  // Output: "10001"
  
  // With optional chaining
  const zipCodeWithOptionalChaining = person.address?.zipCode;
  console.log(zipCodeWithOptionalChaining);  // Output: "10001"


// question no:3 //

///compare the for... in loop and the for... of loop in terms of their use cases and the types of value they iterate over.///

///solved///

// for...in loop

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
};

/// output ///

// a 1
// b 2
// c 3

/// for...of loop
const arr = [1, 2, 3];

for (const value of arr) {
  console.log(value);
};


/// output///

// 1
// 2
// 3

/*for...in ka istemal object properties (keys) par loop chalane ke liye hota hai.
for...of ka istemal iterable values (arrays, strings, etc.) par loop chalane ke liye hota hai.
Arrays ke saath for...in ka istemal na karein kyunki prototype properties ki enumeration ki wajah se masail ho sakte hain.*/


// question no:4 //

//define a function calculate average  that takes an array of numbers as an arguments and returns the average value.//

///solved///
function calculateAverage(numbers) {
    // Check if the array is not empty
    if (numbers.length === 0) {
      return 0; // Return 0 for an empty array to avoid division by zero
    }
  
    let sum = 0;
  
    // Calculate the sum of all numbers in the array using a for loop
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    // Calculate the average by dividing the sum by the number of elements
    const average = sum / numbers.length;
  
    return average;
  }
  
  // Example usage:
  const numbersArray = [10, 20, 30, 40, 50];
  const result1 = calculateAverage(numbersArray);
  console.log("Average:", result1);


  /// output///


//   Average: 30


// question no:5 //

//explain the concept of "closures" in java script and provide an example of their practical use.//

///solved///


function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by invoking outerFunction and assigning the result to a variable
  const closureExample = outerFunction();
  
  // Invoke the inner function, which still has access to outerVariable
  closureExample();

  ///output///

//   I am from the outer function

// question no:6 //
//create an object named student with properties name,age,and  grades. add a method claculate average that calculates the average of the grades.//
///solved///

// Function to create a student object
function createStudent(name, age, grades) {
    return {
      name: name,
      age: age,
      grades: grades,
  
      // Method to calculate the average of grades
      calculateAverage() {
        if (this.grades.length === 0) {
          return 0;
        }
  
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        const average = sum / this.grades.length;
  
        return average;
      }
    };
  }
  
  // Create a student object using the createStudent function
  const student = createStudent("Jane Doe", 22, [88, 92, 95, 87, 90]);
  
  // Example usage:
  const averageGrade = student.calculateAverage();
  console.log(`${student.name}'s Average Grade: ${averageGrade}`);

  /// output ///

//   Jane Doe's Average Grade: 90.4

// question no:7 //
///how can you clone an object in javascript and also give one example each deep copy,shallow copy,  and referance copy//
///solved///

// Original object
const originalObject = { name: "John", age: 25, address: { city: "New York", zipCode: "10001" } };

// Shallow copy using Object.assign
const shallowCopy = Object.assign({}, originalObject);

// Modify the shallow copy
shallowCopy.age = 26;
shallowCopy.address.city = "San Francisco";

console.log(originalObject); // Original object is not modified
console.log(shallowCopy);    // Shallow copy reflects top-level changes, but nested objects are shared

 //shallow copy  output //

//  {
//     name: 'John',
//     age: 25,
//     address: { city: 'San Francisco', zipCode: '10001' }
//   }
//   {
//     name: 'John',
//     age: 26,
//     address: { city: 'San Francisco', zipCode: '10001' }


// Using JSON.stringify and JSON.parse for deep copy
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modify the deep copy
deepCopy.age = 27;
deepCopy.address.city = "Los Angeles";

console.log(originalObject); // Original object is not modified
console.log(deepCopy);       // Deep copy is independent, including changes to nested objects


/// deep copy output///


// {
//     name: 'John',
//     age: 25,
//     address: { city: 'San Francisco', zipCode: '10001' }
//   }
//   {
//     name: 'John',
//     age: 27,
//     address: { city: 'Los Angeles', zipCode: '10001' }
//   }


// Reference copy
const referenceCopy = originalObject;

// Modify the reference copy
referenceCopy.age = 28;
referenceCopy.address.city = "Chicago";

console.log(originalObject); // Original object is modified, as both references point to the same object
console.log(referenceCopy);  // Reference copy reflects changes

///reference copy output ///

// {
//     name: 'John',
//     age: 28,
//     address: { city: 'Chicago', zipCode: '10001' }
//   }
//   {
//     name: 'John',
//     age: 28,
//     address: { city: 'Chicago', zipCode: '10001' }
//   }


// question no:8 //
//write a loop that iterates over an ARRAY OF numbers and logs whether each number is even or odd, using a tranery opretors//
///solved///


const numberArray = [2, 5, 8, 11, 14];

for (const number of numberArray) {
  const result = number % 2 === 0 ? "Even" : "Odd";
  console.log(`${number} is ${result}`);
}

/// output ///

// 2 is Even
// 5 is Odd
// 8 is Even
// 11 is Odd
// 14 is Even

// question no:9 //
//describe the differences between the for loop, while loop, and do...while loop inn javascript .when might you use each //
///solved///

// for (initialization; condition; iteration) {
//     // code to be executed
//   }

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  ///output for loop///

//   0
// 1
// 2
// 3
// 4

//   while loop//

// while (condition) {
//     // code to be executed
//   }


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

///output while loop///
// 0
// 1
// 2
// 3
// 4


// do while loop //

// do {
//     // code to be executed
//   } while (condition);

let f = 0;
do {
  console.log(f);
  f++;
} while (f < 5);

///output do while loop///
// 0
// 1
// 2
// 3
// 4

// question no:10 //
//provide an example of using optional chaining within a loop to access a potentially missing property of an object.


///solved///

// Array of objects representing people
const people = [
    { name: "John", address: { city: "New York" } },
    { name: "Jane" },
    { name: "Bob", address: { city: "San Francisco" } },
  ];
  
  // Loop through the array and log the city of each person (if available)
  for (const person of people) {
    const cityName = person.address?.city || "City not available";
    console.log(`${person.name}'s city: ${cityName}`);
  }

///output///

// John's city: New York
// Jane's city: City not available
// Bob's city: San Francisco



// question no:11 //
//write a for..in loop that iterates over the properties of an object and logs each property name and value.//
///solved///

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue"
  };
  
  // Using for...in loop to iterate over object properties
  for (const property in car) {
    // Check if the property is directly on the object (not inherited)
    if (car.hasOwnProperty(property)) {
      console.log(`${property}: ${car[property]}`);
    }
  }


 /// output ///

//  John's city: New York
// Jane's city: City not available
// Bob's city: San Francisco
// brand: Toyota
// model: Camry
// year: 2022
// color: Blue


// question no:12 //
//explain the use of the break and continue statments within loops. provide scenario where each might be used.//
///solved///

// Use of break in a for loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log("Breaking the loop at i =", i);
      break;
    }
    console.log(i);
  }

  //output//

//  Breaking the loop at i = 5
// 1
// 2

// Use of continue in a while loop
let c = 0;
while (c < 5) {
  c++;
  if (c === 3) {
    console.log("Skipping iteration at i =", i);
    continue;
  }
  console.log(c);
}

/// output ///

// Skipping iteration at i = 5
// 4
// 5


// question no:13//
//write a function calculate tax that calculates and returns the tax amount based on a given income. use a tranery opretors to determine the  tax rate.//
///solved///


function calculateTax(income) {
  // Define tax rates based on income levels
  const lowIncomeRate = 0.1;
  const highIncomeRate = 0.2;

  // Use a ternary operator to determine the tax rate based on income
  const taxRate = income > 50000 ? highIncomeRate : lowIncomeRate;

  // Calculate and return the tax amount
  const taxAmount = income * taxRate;
  return taxAmount;
}

// Example usage:
const income1 = 40000;
const income2 = 60000;

const tax1 = calculateTax(income1);
const tax2 = calculateTax(income2);

console.log(`For an income of $${income1}, the tax amount is: $${tax1}`);
console.log(`For an income of $${income2}, the tax amount is: $${tax2}`);

/// output //

// For an income of $40000, the tax amount is: $4000
// For an income of $60000, the tax amount is: $12000

// question no:14//
// write a function calculate tax that calculates and returns the tax amount based on a given income. use a tranery opretors to determine the  tax rate.
///solved///

function calculateTax(income) {
  // Define tax rates based on income levels
  const lowIncomeRate = 0.1;
  const highIncomeRate = 0.2;

  // Use a ternary operator to determine the tax rate based on income
  const taxRate = income > 50000 ? highIncomeRate : lowIncomeRate;

  // Calculate and return the tax amount
  const taxAmount = income * taxRate;
  return taxAmount;
}

// Example usage:
const income3 = 40000;
const income4 = 60000;

const tax3 = calculateTax(income3);
const tax4 = calculateTax(income4);

console.log(`For an income of $${income3}, the tax amount is: $${tax3}`);
console.log(`For an income of $${income4}, the tax amount is: $${tax4}`);

///output//


// For an income of $40000, the tax amount is: $4000
// For an income of $60000, the tax amount is: $12000
// For an income of $40000, the tax amount is: $4000
// For an income of $60000, the tax amount is: $12000


// question no:15//

// explain//
/*Regular functions and arrow functions in JavaScript have some key differences in terms of scope, this binding, and their use as methods. Let's explore these differences:

Scope:

Regular Functions:
Have their own this binding, which is dynamically scoped. The value of this is determined by how the function is called.
Have their own arguments object.
Arrow Functions:
Do not have their own this binding. Instead, they inherit the this value from the enclosing scope (lexical scoping).
Do not have their own arguments object. The arguments object refers to the arguments of the enclosing function.
this Binding:

Regular Functions:
The value of this is determined by how the function is called. It can be influenced by the object the function is a method of, the global object, or by using methods like call() or apply().
The value of this is dynamic and changes based on the context of the function invocation.
Arrow Functions:
The value of this is lexically scoped, meaning it is determined by the surrounding lexical context (enclosing scope) at the time the arrow function is defined.
Arrow functions do not have their own this binding; they inherit it from the enclosing scope.
Use as Methods:

Regular Functions:
Well-suited for use as object methods because they have their own this binding, which refers to the object on which the method is called.
Can be used with the new keyword to create instances of objects (constructor functions).
Arrow Functions:
Not well-suited for use as object methods when this needs to refer to the object itself. Arrow functions inherit this from the surrounding scope, which might not be the object the method is called on.
Cannot be used as constructor functions with the new keyword.
In summary, regular functions and arrow functions have different behaviors regarding scope, this binding, and their suitability for use as methods. Regular functions are versatile and dynamic, while arrow functions offer concise syntax and lexically scoped this binding. The choice between them depends on the specific use case and the behavior you want in your code.*/



























  











  




