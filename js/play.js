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