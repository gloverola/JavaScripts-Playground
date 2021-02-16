console.log(this);

function logFunction() {
    console.log(this);
}

logFunction()

class user {
    
    logName() {
        console.log(this)
    }
}

new user().logName();

function greet(age) {
    let name = "Glover";
     return function() {
         console.log(`My name is ${name}, I'm ${age} years old`);
     }
}

const aboutMe = greet(30);

aboutMe();

