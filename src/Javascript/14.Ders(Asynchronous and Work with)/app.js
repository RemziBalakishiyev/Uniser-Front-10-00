const header = document.querySelector(".h1");

// header.innerHTML = "Page Header";

// confirm ("Confirm Alert");

// header.innerHTML = "IT Academy";
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

const getCountry = function (countryName) {
  const response = new XMLHttpRequest();

  response.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  response.send();

  response.addEventListener("load", function () {
    if (response.status == 200) {
      const jsonData = JSON.parse(response.response);
      displayCountry(jsonData);
    }
  });
};

getCountry();

// const myPromise = new Promise(function (resolve, reject) {
//   const isPromise = false;

//   if (isPromise) {
//     resolve("Promise ugurludur!");
//   } else {
//     reject("Promise Ugursuzdur");
//   }
// });

// myPromise
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (res) {
//     console.error(res);
//   });

setTimeout(function () {
  console.log("data yuklendir");
  setTimeout(function () {
    console.log("Data deyisdirildi");
  }, 2000);
}, 4000);

// setTimeout(function () {
//   console.log("1 saniye kecdi");
//   setTimeout(function () {
//     console.log("2 saniye kecdi");
//     setTimeout(function () {
//       console.log("3 saniye kecdi");
//       setTimeout(function () {
//         console.log("3 saniye kecdi");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const except = function (second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

except(1)
  .then(function () {
    console.log("1 saniye kecdi");
    return except(1);
  })
  .then(function () {
    console.log("2 saniye kecdi");
    return except(1);
  })
  .then(function () {
    console.log("3 saniye kecdi");
  });
