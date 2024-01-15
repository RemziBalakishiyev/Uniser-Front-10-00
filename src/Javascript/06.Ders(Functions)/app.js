//* Functions

// function helloWorld() {
//   console.log("hi earth!");
//   console.log("hi earth!");
//   console.log("hi earth!");
//   console.log("hi earth!");
//   console.log("hi earth!");
//   console.log("hi earth!");
//   console.log("hi earth!");
//   console.log("hi earth!");
//   console.log("hi earth!");
//   console.log("hi earth!");
// }

// helloWorld();
// helloWorld();
// helloWorld();

// if (10 > 0) {
//   helloWorld();
// }

//* Parameters in function

function log(message) {
  console.log(message); // m= 12 + 2 =>
  //clg(12 + 2)
}

log("Uniser It Academy");

log("Backend");
log("front end");

log(12 + 2); // m =  12 + 2

log("neyse");

function logByType(type, message = "Default Message") {
  if (type) {
    console.log(`LOG MESSAGE : ${message}`);
  } else {
    console.log(message);
  }
}

logByType("ASdas"); //CTRL + SHIFT + Space

//! Your yourGreetingMessage == Hello
//! Default value : Arqument əgər call  edildiyi anda heç bir dəyər almazssa ona verilən default dəyəri istifadə edir. Əgər call olunduğu zaman dəyər verilsə həmin dəyər istifadə olunur

//! Default value dəyər tövsiyyə olunurki son arqumentdən verilsin

//? DRY = Don't repeat yourself

//* Void and Returned functions

function returnedFn() {
  return 10;
}

// let returnedFn = 10;

function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
} // let sum = 10 + 25; => 35

sum(10, 25); // 35

console.log(sum(2000, 25));

console.log(returnedFn());

function calcPercentage(number, percent) {
  return (number * percent) / 100;
}

console.log(calcPercentage());

calcPercentage(100, 20); // cP = 100 * 20/10 =  20

if (calcPercentage(100, 20) > 10) {
  console.warn("Faiz coxdur");
}

console.log(calcPercentage(35, 13));
//  Faiz eger 20den boyuk olarsa ekrana warning mesaji cixar.

//
// bunlarin 20 faizini tapib yeni bir array yarat
const salaries = [1000, 2000, 3000];
let newSalaryArray = [];

for (const salary of salaries) {
  const result = calcPercentage(salary, 20);

  newSalaryArray.push(result);
}

console.log(newSalaryArray);

//* Function expression and Declaration

sayHi1();
function sayHi1() {
  console.log("hi!");
}

const sayHi2 = function () {
  console.log("hi!");
};

sayHi2();

const aFn = (a) => a + 100;

const sumTwoNum = (a, b) => a + b;

console.log(aFn(100));

console.log(sumTwoNum(200, 800));

const helloWorld = () => {
  console.log("Hello worl");
};

helloWorld();



//? Array-in içinə iki verilmiş ədədlərin iki qatını verən yeni bir array qayataran  function yaz

// console.log(twiceArrayElement(numbers)); // [2,4,6,8,10]
