// IF statement within IF statement

let age = window.prompt("How old are you?");
age = Number(age);

if(age >= 18) { 
    document.write("You are old enough to drive!<br>");

    let hasLicense = window.prompt("Do you have a license? (true/false) ");

    if(hasLicense.toLowerCase() === "true") {
        document.write("You have your license!!");
    } else {
        document.write("You don't have your license.");
    }
} else {
    document.write("You must be 18+ to have a license!!");
}
