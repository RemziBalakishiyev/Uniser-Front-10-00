// // // Array and index
// // // const city1 = "Baku";
// // // const city2 = "Sumqayit";
// // // const city3 = "Masalli";

// // let cities = ["Baku", "Masalli", "Sumqayit"];

// // console.log(cities[3]);

// // const numbers = [1, 2, 3, 4, 5];

// // console.log(numbers[3]);

// // const mixedArr = [1, 2, 3, "Bruce", true, undefined];

// // cities[1] = "Gence";

// // console.log(cities);

// // mixedArr[4] = 13;
// // console.log(mixedArr);

// // const lastIndexOfNumbers = numbers.length - 1;

// // console.log(numbers[lastIndexOfNumbers]);

// // console.log(mixedArr[mixedArr.length - 1]);

// // console.log(mixedArr.length);
// // console.log(numbers.length);

// // // Arrayin en sonuncu elementi

// // //Array and Loops
// // let students = ["Nicat", "Vuqar", "Maarif", "Perviz"];

// // // for (let index = 0; index < students.length; index += 2) {
// // //   const elemetnOfStudent = students[index];
// // //   console.log(elemetnOfStudent);
// // // }

// // for (const student of students) {
// //   console.log(student);
// // }

// //Array methods indexOf , shift, unshift ,pop, push, join, concat, splice, slice

// let books = ["1984", "Martin Eden", "Deepwork", "Oldman and Sea"];

// //?  IndexOf - arrayin verilen deyerine gore indexini tapir

// console.log(books.indexOf("Deepwork"));

// // const bookName = prompt("Write your favorite book ");

// // console.log(`${bookName} index is ${books.indexOf(bookName)}`);

// // books.shift();
// // books.shift();

// books.unshift("Atomic Habbits");

// books.pop();
// books.push("Crime and Punishment");

// // for (let index = 0; index < 3; index++) {
// //   const bookName = prompt(`${index}.  book name add : `);

// //   books.push(bookName);
// // }

// console.log(books.join(" | | "));

// const azeBooks = ["Ölülər", "Deli kür ", "Üç atılan"];
// console.log();

// books = books.concat(azeBooks);
// console.log(books);

// books.splice(books.indexOf("Deli kür"), 1);

// console.log(books);
// console.log(books.slice(2, 5));
// console.log(books);

// // for (const book of books) {
// //   console.log(book);
// // }

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);
// for (const fr of frontEnd) {
//   fullStack.push(fr);
// }
// console.log(fullStack);
// for (const bk of backEnd) {
//   fullStack.push(bk);
// }

console.log(fullStack);

const ages = [22, 11, 33, 24, 20, 39, 57, 26, 77, 24];
const evenAges = [];
for (let index = 0; index < ages.length; index++) {
  const element = ages[index];
  if (element % 2 == 0) {
    console.log(element);
    evenAges.push(element);
  }
}

console.log(evenAges);
