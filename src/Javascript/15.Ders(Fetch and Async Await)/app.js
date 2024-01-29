const tableBody = document.querySelector(".table > tbody");

const displayCountry = function (responseData) {
  console.log(responseData);
  tableBody.innerHTML = "";
  const [country] = responseData;
  const html = `
          <tr>
              <td>${country.name.official}</td>
              <td>${country.capital}</td>
              <td>${country.region}</td>
          </tr>`;
  tableBody.insertAdjacentHTML("beforeend", html);
};

//ES 5
// const getCountry = function (countryName) {
//   const response = new XMLHttpRequest();

//   response.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
//   response.send();

//   response.addEventListener("load", function () {
//     if (response.status == 200) {
//       const jsonData = JSON.parse(response.response);
//       displayCountry(jsonData);
//     }
//   });
// };

const getCountry = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      displayCountry(responseData);
    });
};
