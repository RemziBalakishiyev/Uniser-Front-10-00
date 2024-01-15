// let index = 0;

// let fullName = "Walter White";
// let age = 20;

// console.log(`My name is ${fullName} I am ${age} y.o`);
// while (index < 5) {
//   console.log(`Uniser It Academy -- ${index} `);
//   index = index + 1;
// }

// const min = 1;
// const max = 20;
// let random = 1;
// let countWhichLowThanFive = 0;

// let count = 0;
// while (count < 10) {
//   random = Math.round(Math.random() * (max - min) + min);
//   console.log(`Random : ${random}`);
//   count = count + 1;

//   if (random < 5) {
//     console.log(`${random} ededi 5-den kicikdir`);
//     // countWhichLowThanFive = countWhichLowThanFive + 1; // == > countWhichLowThanFive++
//     countWhichLowThanFive++;

//     // countWhichLowThanFive = countWhichLowThanFive + 5 --> countWhichLowThanFive +=5;
//   }
// }

// console.log("Count which low than five: ", countWhichLowThanFive);

// let index = 0;
// while (index < 10) {
//   console.log(`While loop's index: ${index}`);
//   index++;
// }

// 1-le 50 arasinda ededlerin cemini tapan proqram yazin;

let sum = 0;
for (let index = 1; index <= 50; index++) {
  sum = sum + index;
}

console.log("Result : " + sum);

// 1 - le 20 arasinda cut ededlerin hasilini tapin

let multp = 1;
for (let index = 1; index <= 20; index++) {
  if (index % 2 == 0) {
    multp = multp * index;
  }
}

console.log(multp);
