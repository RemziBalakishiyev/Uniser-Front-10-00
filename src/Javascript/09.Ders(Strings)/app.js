let textOne = "I am Boolean Ts - 13 student";
let textTwo = "        I am learning front end ";

//* CharAt;

console.log(textOne.toLowerCase());
console.log(textOne.toUpperCase());
console.log(textOne.length);

console.log(isFinite("3"));
for (let index = 0; index < textOne.length; index++) {
  if (isFinite(textOne.charAt(index))) {
    console.log(textOne.charAt(index));
  }
}

//?  charAt - string bir array istifade etmeyimize komek olur
// console.log(textOne.charAt(5));

//* Concat
console.log(textOne.concat(textTwo, " also Backend"));

//* endsWith

console.log(textOne.endsWith("asdasd"));
console.log(textOne.startsWith("I am B"));
console.log(textOne.charCodeAt(0));

//* startWith

//* includes

console.log(textOne.includes("Ts"));

console.log(textOne.indexOf("t"));
//* lastIndexOf
console.log(textOne.toLowerCase().indexOf("t"));

const texts = textOne.split(" ");
console.log(texts);

//* slice

console.log(textOne.slice(textOne.indexOf("B"), textOne.indexOf("n") + 1));

//* repeat

console.log(textOne.repeat(3));

//* search

console.log(textOne.search("Boolean"));
