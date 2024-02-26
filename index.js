const countriesContainer = document.querySelector(".countries-container");
const search = document.getElementById("inputSearch");
console.log(search);
let countries = [];

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json().then((data) => (countries = data))
  );
  console.log(countries[1]);
}
fetchCountries();

function countriesDisplay() {
  countriesContainer.innerHTML = countries.map((country) => {
    `
      <svg>${country.flag.svg}</svg>
      <h2>${country.name.official}</h2>
      <p>${country.capital}</p>
      <p>${country.population}</p>

    `;
  });
}

search.addEventListener("submit", (e) => {
  e.preventDefault();
  countriesDisplay();
});

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
