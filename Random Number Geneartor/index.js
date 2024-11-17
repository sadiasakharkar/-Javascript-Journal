
//Concept
// let randomNumber = Math.floor(Math.random() * 6)+ 1;
// console.log(randomNumber);

// // random number between certain range 
// const min = 50 ;
// const max = 100;

// let random = Math.floor(Math.random() * (max - min + 1)) + min;
// /* 
//     (max - min + 1): This calculates the total range, ensuring the range includes both min and max.
//     * (max - min + 1): Multiplies the random value by the range, scaling it to the correct size.
//     + min: Shifts the result to start from the min value, ensuring the final number falls between min and max.
// */
// console.log(random);


// Random number generator (rolling three dice)
const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick =function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}

