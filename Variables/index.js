// variables = A container that stores a value.
//             Behaves as if it were the value it contains.

// 1. Declaration  let x;  
// 2. Assignment  x = 100;
// 3. Reassignment  x = 200;


let x = 100; // 100
let y = 200;

console.log(x); // 100
x = 300; // reassignment

let z = x + y;
console.log(z);

var age = 25;
console.log(age); // 25
var price = 10.34; 
let gpa = 3.1;

//Types to print the variable
console.log(`You are ${age} years old.`); // Type:1 using Dollar notation and print the variable
console.log("The price is $" + price); // Type:2 using Plus notation and print the variable

console.log(`Your gpa is: ${gpa}`); 

// Displaying the type of variable
console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

// Strings = A sequence of characters
let firstname = 'John';
console.log(firstname);
console.log(typeof firstname);

let Food = `Pizza`;
console.log(`So, Your Favorite food is ${Food}`);

let email = "hellomail234@example.com";
console.log(`Your email is ${email}`);

// Booleans = true or false
let online = true;
console.log(typeof online);
console.log(`${firstname} is online?  ${online}`);

// Null = A special value that represents nothing
let empty = null;
console.log(typeof empty);
console.log(`The value of empty is: ${empty}`);

// Array = A special value that represents an array of values
let colors = ['red', 'green', 'blue'];
console.log(typeof colors);
console.log(`The value of colors is: ${colors}`);

// Displaying some variables on our webpage
let name = "Bro Code"; 
let current_age = 21; 
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${name}`;
document.getElementById("p2").textContent = `Your age is ${current_age}`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;