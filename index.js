const countriesContainer = document.querySelector(".countries-container");
const search = document.getElementById("inputSearch");
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
          <img src="${country.flags.png}" alt="${country.flags.alt}"
          <h3>${country.name.official}</h3>
          <p>${country.capital}</p>
          <p>${country.population}</p>
        </article>
      `;
    })
    .join("");
}
fetchCountries();

// search.addEventListener("input", (e) => {
//   fetchCountries(e.target.value);
//   console.log(e.target.value);
// });

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
