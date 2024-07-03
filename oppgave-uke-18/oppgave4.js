const output = document.getElementById("output");
const button = document.getElementById("button");

function randomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function loadContent() {
  const pkmn = await getRandomPokemon();
  console.log(pkmn);
  const img = document.createElement("img");
  img.src = pkmn.sprites.front_default;
  const name = document.createElement("h3");
  name.textContent = capitalize(pkmn.name);
  const type = document.createElement("p");
  let typeTxt;
  // Typings
  if (pkmn.types.length == 1) {
    typeTxt = capitalize(pkmn.types[0].type.name);
  } else if (pkmn.types.length == 2) {
    typeTxt = capitalize(pkmn.types[0].type.name) + " / " + capitalize(pkmn.types[1].type.name);
  };
  type.textContent = typeTxt;

  const audio = document.createElement("div");
  audio.innerHTML = `<audio controls><source src="${pkmn.cries.latest}" type="audio/ogg">Your browser doesn't support the audio element</audio>`;

  const obs = document.createElement("p");
  obs.textContent = "Hvis ingenting dukker opp, trykk igjen!"
  obs.classList.add("dark");
  // clear html
  output.innerHTML = "";

  // output order
  output.appendChild(img);
  output.appendChild(name);
  output.appendChild(type);
  output.appendChild(audio);
  output.appendChild(obs);
};

async function getRandomPokemon() {
  const pokeAPI = await fetchAPI("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  const randomPokemonNr = pokeAPI.results[randomNumber(1,1302)];
  const pkmn = await fetchAPI(randomPokemonNr.url);
  return pkmn;
}

async function fetchAPI(api) {
  const res = await fetch(api);
  const data = await res.json();
  return data;
}

button.addEventListener("click", loadContent)