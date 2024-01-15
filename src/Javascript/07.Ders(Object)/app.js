//* Introducing to Object
// const studentBruce = ["Bruce", "Wayne", 35];

// console.log(studentBruce[0] + " " + studentBruce[1]);

const studentBruce = {
  firstName: "Bruce",
  lastName: "Wayne",
  age: 35,
};

console.log(studentBruce);

// //* Bracket and Dot

// console.log(studentBruce.firstName);
// console.log(studentBruce.lastName);
// console.log(studentBruce.age + 20);

// console.log(studentBruce["age"]);

// const keyOfStudent = prompt("Write key for Student: ");

// console.log(studentBruce['35'])

// //* Object in Array

// const employee = {
//   firstName: "Walter",
//   lastName: "White",
//   salary: 60000,
//   specialities: ["Front End", "Backend", "Full-Stack"],
// };

// console.log(employee.specialities[0]);

// for (const speciality of employee.specialities) {
//   console.log(speciality);
// }

// const employees = [
//   {
//     firstName: "Jamie",
//     lastName: "Lannister",
//     salary: 72000,
//     specialities: ["UI/UX", "Graphic Design"],
//   },
//   {
//     firstName: "Tyrion",
//     lastName: "Lannister",
//     salary: 88000,
//     specialities: ["Helpdesk", "Network Adminstrator"],
//   },
//   employee,
// ];

// console.log(employees[1].specialities);
// console.table(employees);

// const showEmployeeName = (empArr) => {
//   for (const emp of employees) {
//     console.log(`${emp.firstName} ${emp.salary}`);
//   }
// };

// showEmployeeName(employees);
//* Nested Object

const coffeeShop = {
  name: "The Daily Grind",
  director: "Memmedzade Vuqar",
  address: {
    country: "USA",
    city: "Washington BC",
    street: "406 Madison St.",
    continents: ["South America"],
    avenues: {
      name: "Yasamal",
    },
  },
  cofeeTypes: [
    {
      coffeeName: "Americano",
      price: 20,
    },
    {
      coffeeName: "Latte",
      price: 15,
    },
  ],
};

console.log(coffeeShop.cofeeTypes[0].coffeeName);
console.log(coffeeShop.cofeeTypes[0].price);

console.log(coffeeShop.address.avenues.name);
console.log(coffeeShop.cofeeTypes[1].price);
//* Object methods
const emp1 = {
  firstName: "Walter",
  lastName: "White",
  salary: 60000,
  specialities: ["Front End", "Backend"],
  setFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  monthlySalary() {
    return this.salary / 12;
  },

  showThis() {
    console.log(this.lastName);
  },

  createCountOfSpeaciality() {
    const count = this.specialities.length;
    this.countSpeaciality = count;
  },
};

emp1.showThis();
console.log(emp1.monthlySalary());

//* Create object property outer of Object
emp1.department = "IT";

emp1.createCountOfSpeaciality();
console.log(emp1);

// console.log(employee.setFullName());

// console.log(employee.monthlySalary());

// const setFullName = function () {
//   return `${employee.firstName} ${employee.lastName}`;
// };

// console.log(setFullName());
