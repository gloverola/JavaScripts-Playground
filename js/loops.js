// ================= while =====================

let a = 2;

while (a < 10) {
    console.log(a);
    a += 2;
}


// create an array of five random number between 1 and 10
let random = [];
let count = 0;
let size = 5;

while (count < size) {
    random.push(Math.round(Math.random() * 10));
    count++;
    console.log(`The currnet size of the array is ${count}`);
}

// ========== do while loop =================================================
let num = 0;
do {
  num++;
  console.log("count is:" + num);
} while (num < 10);