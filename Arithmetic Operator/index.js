// Arithmetic operators =: > +, -, *, /, %, ++, --
//                        operands (values , variables , etc)

let students = 30;
console.log(students);
 
// adding / Increment
students = students + 1; //method:1 using plus notation
console.log(students);

students++; //Method:2 using ++ notation (increment)
console.log(students);

// Subtracting / Decrement
students = students - 1; //method:1 using minus notation
console.log(students);

students--; //Method:2 using -- notation (decrement)
console.log(students);

// Multiplying
students = students * 2; // using multiply notation
console.log(students);

// ** Power
students = students ** 2; // using power notation to raise the number to a power
console.log(students);

// Modulus
students = students % 3; // using modulus notation to get the remainder
console.log(students);

// Division
students = students / 3; // using division notation to get the quotient
console.log(students);

// Floor Division (gives the largest integer less than or equal to the division result)
students = students / 3; // using division notation to get the quotient
console.log(students);

// Ceiling Division (gives the smallest integer greater than or equal to the division result)
students = students / 3; // using division notation to get the quotient
console.log(students);

// Rounding down (gives the largest integer less than or equal to the given number)
students = students / 3; // using division notation to get the quotient
console.log(students);

// Rounding up (gives the smallest integer greater than or equal to the given number)
students = students / 3; // using division notation to get the quotient
console.log(students);

// Exponential (gives the result of raising the base to the exponent)
students = students / 3; // using division notation to get the quotient
console.log(students);

// Another way to write the same code
students = 30; // reassigning the value of students to 30 

// Addition
students += 2; 
console.log(students);

// Subtraction
students -= 2;
console.log(students);

// Multiplication
students *= 2;
console.log(students);

// Division
students /= 2;
console.log(students);

// Modulus
students %= 2;
console.log(students);
 

// Making use of Increment and Decrement operators

students = 30;
// Increment
students++;
console.log(students);

// Decrement
students--;
console.log(students);

/* Note: Operator precedence
         1. () parenthesis
         2. ** exponent /power
         3. *, /, % 
         4. +, -
         5. =, +=, -=, *=, /=, %=, **=
         6. ++, --
*/

let result = (1 + 2) * 3 + 4 ** 2 / 2;
console.log(result);