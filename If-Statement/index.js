// If-Statement = if a condition is true , execute some code 
//                if not, doo something else

let age = window.prompt("How old are you?");
age = Number(age);

if(age >= 18){
    document.write("You are old enough to enter this event!")
}

//if-else
if(age >= 18){
    document.write("You are old enough to enter this event!")
}
else{
    document.write("You must be 18+ to enter this event!!")
}

// Example 2
let time = 14; //let time = 9; 

if(time < 12){
    console.log("Good Morning!!");
}
else{
    console.log("Good Afternoon!!");
}

//Boolean
let isStudent = false ;
if(isStudent){
    console.log("You are a student!") // if statement is true
}
else{
    console.log("You are not a student!!") // if statement is false
} 