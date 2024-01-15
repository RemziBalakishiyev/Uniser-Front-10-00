//!======== If statement !========

//Note: If(şərt) əgər doğru olarsa həmin if altında olan scope içerisindəki kodlar çalışmağa

// const a = -13,
//   b = 8,
//   c = 10;

// if (a > 0) {
//   console.log(b * c);
// } else {
//   console.log(b + c);
// }

// console.log("Prosess tamamlandi 🖱");

// const speciality = prompt("Write your job");

// if (speciality == "Frontend") {
//   console.log("Men Frontend developerem");
// }

// if (speciality == "Backend") {
//   console.log("Men Backend developerem");
// }

// if (speciality == "FullStack") {
//   console.log("Men FullStack developerem");
// }

// if (speciality == "Frontend") {
//   console.log("Men Frontend developerem");
// } else if (speciality == "Backend") {
//   console.log("Men Backend developerem");
// } else if (speciality == "FullStack") {
//   console.log("Men FullStack developerem");
// } else {
//   console.log("Bele bir vakansiya yoxdur");
// }

//!  ======== Logical "AND OR" in Codnitional Statement

// let numberOne = 0,
//   numberTwo = 0;

// //N1 ve N2 deyisenlerinin deyerleri 0 -dan boyuk olarsa ekrana onlarin hasilini yazdirsin, N1 0-dan boyuk ve n2 0-dan kicik olarsa cemini yazdir ,  n1  0-dan kicik n2  0 - dan boyuk olarsa onlarin qismetini, her ikisi menfi olarsa ferqini tap

// if (numberOne > 0 && numberTwo > 0) {
//   console.log(numberOne * numberTwo);
// } else if (numberOne > 0 && numberTwo < 0) {
//   console.log(numberOne + numberTwo);
// } else if (numberOne < 0 && numberTwo > 0) {
//   console.log(numberOne / numberTwo);
// } else if (numberOne < 0 && numberTwo < 0) {
//   console.log(numberOne - numberTwo);
// } else {
//   console.log("Bu eded sifirdir");
// }

// let numberThree = 16;
// if (numberThree % 2 != 0) {
//   console.log("Bu eded cütdür");
// } else {
//   console.log("Eded tekdir");
// }

// if (numberThree % 3 == 0 || numberThree % 4 == 0) {
//   console.log("Salam");
// }

// let numberFor = "4";

// if ("5" == 5) {
//   console.log("It is correct!");
// } else {
//   console.log("It is incorrect!");
// }

let userRole = "user";

switch (userRole) {
  case "admin":
    console.log("Siz sisteme daxil ola bilersiniz!");
    break;
  case "user":
    console.log("Siz sistemde istifadecisiniz!");
    break;
  default:
    console.log("Yetki yoxdur!");
    break;
}

let dayOfWeekNumber = 1;

switch (dayOfWeekNumber) {
    case 1:
    case 5:
        console.log("Bu gün kurs günüdür");
        break;
  case 2:
    console.log("Bu gün məşq günüdür!");
    break;

  case 3:
    console.log("Praktika günü");
    break;
  case 4:
    console.log("Nezeriyye günü");
    break;

  case 6:
  case 7:
    console.log("Istirahet günü");

  default:
    console.log("Heftenin günü yoxdur");
    break;
}

//1. Tempratura görə buzun əriyib əriməməsini tapın
