let card = document.querySelector(".card");

let cardTitle = document.querySelector(".card-title");
// console.log(card.children);
// console.log(card.children[0].children);
// //* InsertAdjecentHTML
// card.children[0].children[0].innerHTML += " Uniser It Academy";

// for (const cardChilds of card.children[0].children) {
//   if (cardChilds.classList.contains("card-link")) {
//     cardChilds.classList.add("btn", "btn-danger");

//     console.log(cardChilds.previousElementSibling);
//   }
// }

// console.log(card.parentNode);

cardTitle.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.classList.remove(
  "btn-primary"
);
cardTitle.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.classList.add(
  "btn-success"
);

const createdButton = document.createElement("button");

createdButton.setAttribute("type", "submit");
createdButton.textContent = "Submit form";
createdButton.classList.add("btn", "btn-danger");
console.log(createdButton);

const form = document.querySelector("form");

const html =
  "<button class='btn btn-danger' id='submitBtn' type='submit' >Submit form</button>";

form.insertAdjacentHTML("beforeend", html);

document.querySelector("#submitBtn").style.width = "300px";
// form.appendChild(createdButton);

const getRndColor = function () {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const navLink = document.querySelector(".nav-link");
const navItem = document.querySelector(".nav-item");
const navbar = document.querySelector(".navbar-nav");
navLink.addEventListener("click", function (event) {
  console.log("NAV_LINK");
  //   event.stopPropagation();
  //   event.preventDefault();
  console.log(event.target);
  console.log(event.currentTarget);

  this.style.backgroundColor = getRndColor();
});

navItem.addEventListener("click", function (event) {
  console.log("NAV_ITEM");
  console.log(event.target);
  console.log(event.currentTarget);

  this.style.backgroundColor = getRndColor();
});

navbar.addEventListener("click", function (event) {
  console.log("NAVBAR");
  console.log(event.target);
  console.log(event.currentTarget);

  this.style.backgroundColor = getRndColor();
});
