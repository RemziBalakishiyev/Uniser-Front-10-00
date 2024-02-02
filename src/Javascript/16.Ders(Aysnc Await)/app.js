const tableBody = document.querySelector(".table > tbody");

const displayCountry = function (responseData) {
  console.log(responseData);
  tableBody.innerHTML = "";
  const [country] = responseData;
  const html = `<tr>
              <td>${country.name.official}</td>
              <td>${country.capital}</td>
              <td>${country.region}</td>
          </tr>`;
  tableBody.insertAdjacentHTML("beforeend", html);
};

const getCountry = async function (countryName) {
  try {
    const responseAwait = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    if (responseAwait.status == 404) {
      throw new Error("Ölkə yoxdur");
    }
    const resData = await responseAwait.json();

    displayCountry(resData);
  } catch (error) {
    alert(error);
  }

  return `Əməliyyat uğurla tamamlandı`;
};
