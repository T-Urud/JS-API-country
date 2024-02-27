const countriesContainer = document.querySelector(".countries-container");
const rangeValue = document.getElementById("rangeValue");
let countries = [];

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json().then((data) => (countries = data))
  );
  console.log(countries);
  countriesDisplay();
}

function countriesDisplay() {
  // rangeValueDisplay();
  const filteredCountries = countryNameFilter();
  const slicedCountries = filteredCountries.slice(0, inputRange.value);
  countriesContainer.innerHTML = filteredCountries
    .map((country) => {
      return `
        <article class="countryCard">
          <img src="${country.flags.png}" alt="${country.flags.alt}">
          <h3>${country.name.common}</h3>
          <p id="capitalCity">Capital: ${country.capital}</p>
          <p>Population: ${country.population}</p>
        </article>
      `;
    })
    .join("");
}

function countryNameFilter() {
  let countrySearch = inputSearch.value.toLowerCase();
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(countrySearch)
  );
}
inputSearch.addEventListener("input", countriesDisplay);

function rangeValueDisplay() {
  inputRange.addEventListener("input", () => {
    rangeValue.textContent = inputRange.value;
    countriesDisplay();
  });
}

fetchCountries();
// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
