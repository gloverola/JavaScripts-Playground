// ======== CALL STACK ========
// The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.

// How js "knows" what function is currently beign run and what functions are called from within that function, etc.

// Last in, First Out

// ========= How it works =========== 

// When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.

// Any function that are called by that function are added to the call stack further up, and run where their calls are reached.

// When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.


// right angle triangle

const multiply = ( x, y ) => x * y;

const square = ( x ) => multiply( x, x );

const isRightAngled = ( a, b, c ) => {
    return square( a ) + square( b ) === square( c );
};

console.log(isRightAngled(3, 4, 5));