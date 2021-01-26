// ======= Object Literals ==========
// const book1 = {
//     title: "Book one",
//     author: "John Doe",
//     year: "2020",
//     getSummary () {
//         const { title, author, year } = this;
//         return `${title} was written by ${author} in ${year}`
//     }
// };

// console.log( book1.getSummary() );

// ======= Contructor ES5 =========
// function Book (title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
    
//     this.getSummary = function () {
//         const { title, author, year } = this;
//         return `${ title } was written by ${ author } in ${ year }`
//     };

//     }

// const book2 = new Book( "The Horizon", "Catalin Pit", "2019" );

// console.log( book2.getSummary() );


// ======== Protoype =======
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// Book.prototype.getSummary = function() {
//     const { title, author, year } = this;
//     return `${title} was written by ${author} in ${year}`
// }

// Book.prototype.getAge = function () {
//     const { title, author, year } = this;
//     const age = new Date().getFullYear() - year;
//     return `${title} is ${age} years old`
// }

// const book2 = new Book("The Horizon", "Catalin Pit", "2010");

// console.log( book2.getAge() );

// ======= Classes =========
class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.yaer = year;
    }

    getSummary () {
        const { title, author, year } = this;
        return `${ title } was written by ${ author } in ${ year }`
    }
}

// ======= Sub classes ======
class Magazine extends Book {
    constructor ( title, author, year, month ) {
        super( title, author, year );
        this.month = month;
    }
}

const mag1 = new Magazine( "The Beyond", "Mary Salon", "2016", "Febuary" );

console.log(mag1);
