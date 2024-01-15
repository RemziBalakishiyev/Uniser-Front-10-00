const headerOfDoc = document.getElementById("head-container");

//* Yazini dəyişmək üçün
headerOfDoc.innerHTML = "<em>Uniser IT Academy</em>";

//* Style deyismek ucun
headerOfDoc.style.color = "#780000";
headerOfDoc.style.fontSize = "32px";
headerOfDoc.style.backgroundColor = "#fff3b0";
headerOfDoc.style.padding = "12px 16px";

//* Classi deyishmek
const textContentContainer = document.getElementById("txContent");
// textContentContainer.className = "flexBoxing";
textContentContainer.className += " flexBoxing";

console.log(textContentContainer.classList);

textContentContainer.classList.remove("flexBoxing");
console.log(textContentContainer.classList.contains("flexBoxing"));

// const content1 = document.querySelector(".content-1");s

// const contents = document.getElementsByClassName("content-1");
const contents = document.querySelectorAll(".content-1");

console.log(contents);
const getRndColor = function () {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
for (const content of contents) {
  content.style.backgroundColor = getRndColor();
}

const cardBody = document.querySelector(".card-container .card .card-body");

// content1.style.backgroundColor = "red";
// console.log(content1);

const spans = document.querySelectorAll("span");
for (const span of spans) {
  span.style.color = getRndColor();
}

console.log(cardBody);
console.log(headerOfDoc);

const button = document.querySelector(".button-5");

// button.setAttribute("href", "https://coolors.co/palettes/trending");

button.setAttribute("target", "_blank");

const checkBox = document.querySelector(".check #check-5");

checkBox.setAttribute("checked", "checked");

const showAlert = function () {
  alert("Event is work");
};

const changeHeadText = function () {
  headerOfDoc.textContent = "This is changed text!";
  headerOfDoc.style.backgroundColor = getRndColor();
};

button.addEventListener("mouseover", changeHeadText);

// headerOfDoc.addEventListener("mouseover", changeHeadText);

headerOfDoc.onclick = changeHeadText;

const input = document.querySelector(".input-group");

const cardTitle = document.querySelector(".card-title");
input.addEventListener("keydown", function () {
  cardTitle.style.color = getRndColor();
});

button.addEventListener("click", function () {
  cardTitle.innerHTML = input.value;
});
