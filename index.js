const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");
let countries = [];
let sortMethod = "maxToMin";

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json().then((data) => (countries = data))
  );
  console.log(countries);
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countries
    .filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      // RETURN très important dans le sort
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.name.common.localeCompare(b.name.common);
      }
    })
    .slice(0, inputRange.value)
    .map((country) => {
      return `
        <article class="countryCard">
          <img src="${country.flags.svg}" alt="${country.flags.alt}">
          <h3>${country.name.common}</h3>
          <p id="capitalCity">Capital: ${country.capital}</p>
          <p>Population: ${country.population.toLocaleString()}</p>
        </article>
      `;
    })
    .join("");
}

window.addEventListener("load", fetchCountries);
inputSearch.addEventListener("input", countriesDisplay);

inputRange.addEventListener("input", () => {
  rangeValue.textContent = inputRange.value;
  countriesDisplay();
});

btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    countriesDisplay();
  });
});

// function countryNameFilter() {
//   let countrySearch = inputSearch.value.toLowerCase();
//   return countries.filter((country) =>
//     country.name.common.toLowerCase().includes(countrySearch)
//   );
// }
//   Pas obligé de faire une fct à chaque fois, (on peut directement ecrire avant map), ça peut ralentir le navigateur et crash la page
// toLowerCase() pour tout mettre en minuscules (pour comparer des choses =) même si tapé en maj dans input
