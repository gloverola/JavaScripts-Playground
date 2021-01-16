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


// const pick = ( arr ) => {
//     const random = Math.floor( Math.random() * arr.length );
//     return arr[random];
// }



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


// =================== SCOPE, HOC, CALLBACKS =======================

// const doubleArray = ( arr ) => {

//     let doubled = []

//     for ( let i = 0; i < arr.length; i++ )
//     {
//         let double = arr[ i ] * 2;
//         doubled.push(double)
//     }

//     return doubled
// }

// console.log(doubleArray([2, 4, 6, 8]));


// ================== HOC =====================

// function myScream (scream) {
//     scream();
//     scream();
// }

// function screamer () {
//     console.log('HAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
// };

// myScream( screamer );


// function greet () {
//     console.log('Hello!');
// }

// function greetMe ( action, num ) {
//     for ( let i = 0; i < num; i++ )
//     {
//         action();
//     }
// }

// console.log(greetMe( greet, 10 ));

// function morning () {
//     console.log('Good Morning');
// }

// function night () {
//     console.log('Good Night');
// }

// function greet (f1, f2) {
//     let random = Math.random();
//     console.log( random );
    
//     if ( random < 0.5 )
//     {
//         f1();
//     } else
//     {
//         f2()
//     }
// }

// console.log(greet(morning, night));


// function makeBetween ( x, y ) {
//     return function ( num ) {
//         return num >= x && num <= y;
//     }
// }

// const isChild = makeBetween( 0, 18 )

// console.log( isChild( 0 ) );


// function areaOfCircle ( r ) {
//     let PI = 3.142;
//     return 2 * PI * r
// }

// console.log(areaOfCircle(10));



// const books = [
//     {
//         title: "Rece on the go",
//         price: 40.00
//     },
//     {
//         title: "Recing man",
//         price: 30.00
//     },
//     {
//         title: "Rece with me",
//         price: 50.00
//     },
//     {
//         title: "Rece here",
//         price: 20.00
//     },
// ]


// let total = 0

// for ( let i = 0; i < books.length; i++ )
// {
    
//     total += books[i].price
// }

// console.log(total);

// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// const newNumbers = numbers.filter( number => number % 2 === 0);

// console.log(newNumbers);


// ===================== Reduce ===========================

// const numbers = [ 20, 30, 49, 323, 435, 54 ];



// const tot = numbers.reduce( ( total, value ) => {
//     return total + value;
// } )

// console.log(tot);

// ==== Find Maximum Value =====

// const maxVal = [ 50, 78, 69, 89, 93, 98 ];

// const maximum = maxVal.reduce( ( max, currVal ) => {
//     // if ( currVal > max ) return currVal
//     // return max
//     return Math.max( max, currVal );
// } )

// console.log(maximum);

// ============ Spread Operator =============

// Array

// const cephalopods = [ 'dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish' ];

// const gastropods = [ 'giant african snail', 'banana slug', 'variable neon slug' ];

// const cnidaria = [ 'fire coral', 'moon jelly' ];

// const mollusca = [ ...cephalopods, ...gastropods ];

// console.log( mollusca);

// Objects

// const feline = {
//     legs: 4,
//     family: "Felidae"
// };

// const canine = {
//     family: "Canine",
//     furry: true
// }

// const dog = {
//     ...canine,
//     isPet: true,
// }

// console.log(dog);

// ================= Destructuring =================

// Array

// const raceResults = [
//     'Eluid Kipchoge',
//     'Feyisa Lelisa',
//     'Galen Rupp',
//     'Ghirmay Ghebreslassie',
//     'Alphonce Simbu',
//     'Jared Ward'
// ];


// const [ gold, silver, bronze ] = raceResults;

// console.log( bronze );

// Objects

// const runner = {
//     first: "Eluid",
//     last: "Kipchoge",
//     country: "Kenya",
//     title: "Elder of the Order of the Golden Heart of Kenya"
// }

// const { first, last, ...other } = runner;

// console.log(other.title);


// ===== Nested Destructuring =======

// const results = [
//   {
//     first: "Eluid",
//     last: "Kipchoge",
//     country: "Kenya",
//   },
//   {
//     first: "Feyisa",
//     last: "Lilesa",
//     country: "Ethiopa",
//   },
//   {
//     first: "Galen",
//     last: "Rupp",
//     country: "United States",
//   },
// ];

// const [ { first: goldWinner }, , { country } ] = results;

// console.log(country);


// ======== Destructuring Parameters ========

// const runner = {
//     first: "Eluid",
//     last: "Kipchoge",
//     country: "Kenya",
//     title: "Elder of the Order of the Golden Heart of Kenya"
// }

// const print = ( person ) => {
//     const { first, last, title } = person;
//     console.log( `${ first } ${ last }, ${ title }` );
// };

// print( runner );


// ======= Shorthand Object Properties ======== 

// const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];

// const getStats = ( arr ) => {
//     const max = Math.max( ...arr );
//     const min = Math.min( ...arr );
//     const sum = arr.reduce( ( sum, r ) => sum + r );
//     const avg = sum / arr.length;

//     return {
//         max,
//         min,
//         sum,
//         avg,
//     }
// }

// const stats = getStats( reviews );

// console.log(stats);

// ======== Computed Properties ==========

// const role = 'host';
// const person = 'Jools Holland';
// const role2 = 'Director';
// const person2 = 'James Cameron';

// const team = {
//     [ role ]: person,
//     [ role2 ]: person2,
//     [1 + 6 + 9]: 'sisteen'
    
// }

// console.log(team);

// ======== Adding Methods to objectts ======== 

// const math = {
//     multiply: function ( x, y ) {
//         return x * y;
//     },
//     divide: function ( x, y ) {
//         return x / y;
//     },
//     square: function ( x ) {
//         return x * x;
//     }
// };

// console.log(math.multiply(2, 4));

// ============ THIS ===============

// function sayHi () {
//     console.log( "hi" );
//     console.log(this);
// }

// sayHi()

const myDeck = {
    deck: [],
    suits: [ 'hearts', 'diamonds', 'spades', 'clubs' ],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck () {
        const { suits, values, deck } = this;

        for ( let value of values.split( ',' ) )
        {
            for ( let suit of suits )
            {
                deck.push( {
                    value,
                    suit
                })
            }
        }
    },
    drawCard () {
        return this.deck.pop();
    }
}

console.log(myDeck);