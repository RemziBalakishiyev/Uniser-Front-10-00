const record = document.getElementById("recorded");
const guessBtn = document.querySelector(".guess-btn");
const startBtn = document.querySelector(".main-btn");
const numberInp = document.querySelector(".number-input");
const result = document.querySelector(".guesses");
const progress = document.getElementById("progress");
const mainHeader = document.querySelector(".main-header");

const errorSpan = document.querySelector(".error-message");
const secretNumber = 13;

const colors = ["#57cc99", "#d90429", "#003566"];

const gameOver = () => {
  if (progress.value == 100) {
    numberInp.setAttribute("disabled", "disabled");
    guessBtn.setAttribute("disabled", "disabled");
    guessBtn.classList.remove("guess-btn");
    guessBtn.classList.add("guess-btn-invalid");
  }
};

const increaseProgress = function () {
  let qiymet = +progress.value; // 0
  qiymet += 25; // q = 25;
  progress.value = qiymet; //pr = 25
  gameOver();
};

const clearInput = function () {
  numberInp.value = "";
};

const startNewGame = function () {
  guessBtn.removeAttribute("disabled");
  guessBtn.classList.add("guess-btn");
  guessBtn.classList.remove("guess-btn-invalid");
  numberInp.removeAttribute("disabled");
  progress.value = 0;
};

startBtn.addEventListener("click", startNewGame);
const checkANumber = function () {
  const number = numberInp.valueAsNumber;

  if (secretNumber < number) {
    result.innerHTML = "Number too high ⚡";
    result.style.color = colors[1];
    increaseProgress();
  } else if (secretNumber > number) {
    result.innerHTML = "Number too low 🤏";
    result.style.color = colors[2];
    increaseProgress();
  } else {
    result.innerHTML = "Victory ✌";
    result.style.color = colors[0];
  }

  clearInput();
};

guessBtn.addEventListener("click", checkANumber);

const checkNumberValidation = () => {
  const number = numberInp.valueAsNumber;

  if (number < 0 || number > 100) {
    guessBtn.setAttribute("disabled", "disabled");
    guessBtn.classList.remove("guess-btn");
    guessBtn.classList.add("guess-btn-invalid");
    errorSpan.classList.add("show");
    errorSpan.classList.remove("hide");
  } else {
    guessBtn.removeAttribute("disabled");
    guessBtn.classList.add("guess-btn");
    guessBtn.classList.remove("guess-btn-invalid");
    errorSpan.classList.remove("show");
    errorSpan.classList.add("hide");
  }
};

numberInp.addEventListener("keyup", checkNumberValidation);
