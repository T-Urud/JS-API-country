const countriesContainer = document.querySelector(".countries-container");
let countries = [];

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json().then((data) => (countries = data))
  );
  console.log(countries);
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countries
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
fetchCountries();

inputSearch.addEventListener("input", (e) => {
  console.log(e.target.value);
  country.name.includes(inputSearch.value);
});

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
