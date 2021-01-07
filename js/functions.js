// const score = [ 40, 60, 45, 70, 80, 67 ];

// for ( let i = 0; i < score.length; i++ )
// {
//     console.log(score[i] += 2);
// }

// const myStudents = [
//     {
//         name: "Ayo",
//         score: 50
//     },
//     {
//         name: "Gabby",
//         score: 40
//     },
//     {
//         name: "Sarah",
//         score: 70
//     },
//     {
//         name: "Tunde",
//         score: 79
//     },
//     {
//         name: "Kim",
//         score: 65
//     },
// ]

// let total = 0;

// for ( let i = 0; i < myStudents.length; i++ )
// {
//     let student = myStudents[ i ];
//     total += student.score;
// }

// console.log( total / myStudents.length );

// const gameBoard = [
//     [ 4, 6, 4, 8 ],
//     [ 5, 3, 7, 2 ],
//     [ 8, 5, 4, 3 ],
//     [ 6, 6, 4, 6 ],
// ];

// let total = 0;

// for ( let i = 0; i < gameBoard.length; i++ )
// {
//     let row = gameBoard[ i ];
    
//     for ( let j = 0; j < row.length; j++ )
//     {
//         total += row[ j ];
//     }
// }

// console.log(total);

// Write a function to validate a password
// Password should be valid if it's not less than 8 characters
// password does not contain spaces
// password does not contain username

// function isValidPassword (password, username) {
//     if ( password.length < 8 ||
//         password.indexOf( ' ' ) !== -1 ||
//         password.indexOf( username ) !== -1 )
//     {
//         return false;
//     } return true;
// }

// console.log(isValidPassword('glover1234', 'itsglover'));

// Write a function to find the average value in an array of numbers

// const averageValue = ( arr ) => {

//     let total = 0;

//     for ( let i = 0; i < arr.length; i++ ) {
//         total += arr[ i ];
//     }
//     let result = total / arr.length;

//     return result;
// }

// console.log(averageValue( [ 4, 6, 60, 7 ] ));



// A Pangram: is a sentence that contains every letter of the alphabet;
// Write a function called isPangram, which checks to see if the sentence contains every letter of the alphabet. Make sure to ignore string casing

// const isPangram = ( sentence ) => {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'

//     let lowerCase = sentence.toLowerCase();

//     for ( let i = 0; i < alphabet.length; i++ )
//     {
//         if ( !lowerCase.includes( alphabet[ i ]))
//         {
//             return false;
//         }
//     }
//     return true;
// }

// console.log( isPangram( 'The five boxing wizards jump quickly' ) ); // true

// console.log(isPangram( 'The five boxing wizards is lazy' )); // false


const pick = ( arr ) => {
    const random = Math.floor( Math.random() * arr.length );
    return arr[random];
}



// const getCard = () => {

//     const values = [
//       "1",
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "10",
//       "J",
//       "K",
//       "Q",
//       "A",
//     ];
//     const suits = [ "clubs", "spades", "hearts", "diamonds" ];
    
//     const value = pick( values );
//     const suit = pick( suits );

//     return { value: value, suit: suit };
// }

// console.log(getCard());