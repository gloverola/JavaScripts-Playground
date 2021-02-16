// ===== Array.includes ====== 

// it takes a value and tells you if that array includes that value or not. it's a boolean method


let ingredients = [
    'water',
    'corn',
    'flour',
    'cheese',
    'sugar',
    'eel',
];

if (ingredients.includes('water')) {
    console.log('Water is good for the body');
}

// ===== IndexOf =====

// returns the index of a value in the array
// if values is not found it returns -1

console.log(ingredients.indexOf('rice'));


// ===== Reverse ======
// it reverses an array in place

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

console.log(letters.reverse());

// ======== Join ========
// it takes an array and it returns a string where it joins all the elements in that array to one single string

console.log(letters.join("."));

// ====== Slice ======== 
// Takes a portion of an array and makes a new array with it so it doesn't impact the original

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);

console.log(swimmers);

// ======== Sort ======
// Sorts the elements of an array in place and returns the sorted array


let people = [
    'Ayo',
    'Sola',
    'Ola',
    'Abbey',
    'Hendrix'
]

let newPeople = people.sort()

console.log(people);

let nums = [34, 10, 1000000, 67, 99, 100]

console.log(nums.sort((a, b) => a - b));

