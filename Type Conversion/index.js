// type conversion = change the datatype of a value to another (String , number , boolean)

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age , typeof(age))

// type casting a string into different types
let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x , typeof(x)); //NAn (not a number)
console.log(y , typeof(y));
console.log(z , typeof(z)); // True 

// type conversion a number into different types
let a = 0;
let b = 0;
let c = 0;

x = Number(a);
y = String(b);
z = Boolean(c);

console.log(a , typeof(a)); 
console.log(b , typeof(b));
console.log(c , typeof(c));  

