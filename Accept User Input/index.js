// How to Accept User Input

// Way 1 Easy Way: Using prompt / Window prompt
// Way 2 Professional Way: HTML textbox

// Way 1 Easy Way: Using prompt / Window prompt
let username = window.prompt("What is your name?");
console.log("Hello " + username);

// Way 2 Professional Way: HTML textbox
document.getElementById("submitBtn").onclick = function() {
    let username = document.getElementById("usernameInput").value;
    console.log(username);
}

