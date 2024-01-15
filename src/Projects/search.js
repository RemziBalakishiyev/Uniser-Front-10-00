let programmingTechnologies = [
  "Html", //html.includes
  "Css",
  "Javascript",
  "React",
  "Mongo db",
  "C#",
  "Sql server",
];

let inputOfSearch = document.getElementById("search");
let listGroupForList = document.querySelector(
  "#autocompleteContainer .list-group"
);

const showSearchedItem = function (item) {
  listGroupForList.innerHTML += `<li class='list-group-item'>${item}</li>`;
};

const searchProgrammingDataForAutoComplete = function () {
  listGroupForList.innerHTML = "";
  let valueToSearch = inputOfSearch.value;

  if (!valueToSearch) {
    listGroupForList.innerHTML = "";
    return;
  }
  for (const pt of programmingTechnologies) {
    if (pt.toLowerCase().includes(valueToSearch.toLowerCase())) {
      showSearchedItem(pt);
    }
  }
};

inputOfSearch.addEventListener("keyup", searchProgrammingDataForAutoComplete);
