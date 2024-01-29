const movies = {
  name: "Silence of The sheep",
  genre: ["Dram", "Dedective", "Grammy"],
  languages: ["Azerbaijan", "Russian", "English", "Turk"],
  subTitles: ["Azerbaijan", "Turk", "Arabic"],

  seasons: {
    firstSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    secondSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    lastSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
  },

  additionalInformation({ imdbPoint, realesDate }) {
    if (imdbPoint > 6) {
      this.imdb = {
        evaulution: "Best",
        releaseDate: realesDate,
        point: imdbPoint,
      };
    } else {
      this.imdb = {
        evaulution: "Bad",
        releaseDate: realesDate,
        point: imdbPoint,
      };
    }
  },

  addNewLanguage(langNames) {
    this.languages = [...this.languages, ...langNames];
  },
};

const bookLibrary = {
  books: [
    "1984",
    "Crime and Punishment",
    "Red dragon",
    "u geni",
    "Romeo and Juliet",
    "Ferhad Shirin",
    "Her ve sulh",
  ],
  prices: [12, 15, 12, 25, 28, 21],
  genre: ["Dedective", "Romantic", "Classical"],
};

//* Array Destructing
// let cities = ["Baku", "Sumqayit", "Masalli"];

// let baku = cities[0];
// let sumqayit = cities[1];

// let [a, , b] = cities;

// console.log(a, b);
// console.log(a.toUpperCase());

// const [firstelement,] = "baku";

// console.log(firstelement);

// const [georgeOrwellBook, , tomHarrisBook] = bookLibrary.books;

// console.log(`George Orwel's book ${georgeOrwellBook}`);
// console.log(`Tom Harris's book ${tomHarrisBook}`);

// const person = {
//   name: "Ali",
//   age: 27,
//   detail: {
//     fullName: "Bruce Wayne",
//     city: "Gotham City",
//   },
// };

// const person2 = {
//   name: "Ali",
//   age: 27,
//   detail: {
//     fullName: "Bruce Wayne",
//     city: "Gotham City",
//   },
// };

// const {
//   age,
//   name: firstName,
//   detail: { fullName },
// } = person;

// const [firstNameOfPerson, lastNameOfPerson] = fullName.split(" ");
// console.log(age);
// console.log(firstName);
// // console.log(detail);
// console.log(fullName);

// console.log(lastNameOfPerson);

console.clear();
//* Object destructing
// const {
//   genre: [dramVal, , grammyVal],
//   seasons: { lastSeason },
// } = movies;
// console.log(lastSeason);

// const movies1Info = {
//   imdbPoint: 7.5,
//   realesDate: 2018,
// };
// const movies3Info = {
//   imdbPoint: 8.5,
//   realesDate: 2016,
// };
// const movies2Info = {
//   imdbPoint: 5.5,
//   realesDate: 2022,
// };

// // movies.additionalInformation(movies1Info.imdbPoint, movies1Info.realesDate);

// // const { imdbPoint, realesDate } = movies1Info;
// // movies.additionalInformation(movies1Info);
// // console.log(realesDate);
// // console.log(movies);

console.clear();

// const positiveNumbers = [1, 2, 3];
// const negativeNumbers = [-1, -2, -3];

// console.log(positiveNumbers);

// const allNumbers = [10, 20, 30, ...positiveNumbers, ...negativeNumbers];

// console.log(allNumbers);
// console.log(...positiveNumbers);

// const capitalCase = function (text) {
//   const [firstSymbol, ...otherSymbol] = text;
//   return `${firstSymbol.toUpperCase()}${otherSymbol.join("")}`;
// };

// const numbers = [1, 2, 4, 5, 6];

// const [firstNumber, ...otherNumbers] = numbers;

// console.log(otherNumbers);

console.clear();

// const newLangs = [
//   "Spain",
//   "German",
//   "French",
//   "Azerbaijan",
//   "Russian",
//   "Arabic",
//   "German",
// ];

// movies.addNewLanguage(newLangs);

// console.log(movies.languages);

// let person = { name: "Ali", age: 27 };

// person = {
//   ...person,
//   surname: "Aliyev",
// };

// const numbers = [1, 2, 3, 4, 5];
const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isBestselller: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isBestselller: false,
  },
  { title: "1984", author: "George Orwell", isBestselller: true },
  { title: "Animal Farms", author: "George Orwell", isBestselller: true },
];
// tenNumbers = numbers.map(function (num) {
//   return num * 10;
// });
// console.log(tenNumbers);
// const titles = [];
// for (const book of books) {
//   titles.push(book.title);
// }

const allName = books.map((book) => book.title + " " + book.author);

const employes = [
  {
    id: 1,
    Department: "IT",
    firstName: "Bruce",
    lastName: "Wayne",
    salaryOfYear: 60000,
  },
  {
    id: 2,
    Department: "IT",
    firstName: "John",
    lastName: "Wick",
    salaryOfYear: 18000,
  },
  {
    id: 3,
    Department: "HR",
    firstName: "Walter",
    lastName: "White",
    salaryOfYear: 10000,
  },
  {
    id: 2,
    Department: "IT",
    firstName: "Jamie",
    lastName: "Lanniste",
    salaryOfYear: 70000,
  },
];

const fullNames = employes.map((emp) => emp.firstName + " " + emp.lastName);
console.log(fullNames);
console.log(allName);

//Filter

const bestselleBooks = books.filter(function (book) {
  return book.isBestselller;
});

console.log(bestselleBooks);

const numbers = [1, 2, -3, -4, 5];

const positiveNumbers = numbers.filter(function (num) {
  return num > 0;
});

console.log(positiveNumbers);

const bestWorkerFullNames = employes
  .filter((emp) => emp.salaryOfYear > 20000)
  .map((bw) => bw.firstName + " " + bw.lastName);

console.log(bestWorkerFullNames);

const nonBestSellers = books
  .filter((book) => !book.isBestselller)
  .map(function (book) {
    return {
      name: book.title,
      writer: book.author,
    };
  });

console.log(numbers);
const a = numbers.reduce(function (accumlator, currentValue) {
  console.log(`Acc : ${accumlator}`);
  console.log(`currentValue : ${currentValue}`);
  return currentValue + accumlator;
});

const sum = [1, 2, 3, 4, 5].reduce((acc, currentValu) => acc + currentValu);

const sumOfMonthlySalary = employes
  .map((emp) => Math.ceil(emp.salaryOfYear / 12))
  .reduce(function (acc, currentValue) {
    return acc + currentValue;
  });
// console.log(sum);
// console.log(sumOfMonthlySalary);

console.log(employes.map((emp) => Math.ceil(emp.salaryOfYear / 12)));





