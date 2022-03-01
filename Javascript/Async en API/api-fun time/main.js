let toggle = true;
const list = document.querySelector(".pokemonBox");
const pikachuInfo = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const movePikachu = 'https://pokeapi.co/api/v2/move/9/';
const pokemonName = 'https://pokeapi.co/api/v2/pokemon-species/25/"';

const getPokemonData = (query) => {
  fetch(pikachuInfo)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log("pokemon not found", error);
  })   
}

getPokemonData();

const showPikachu = () => {
  if (toggle) {
    //const pokemon = getPokemonData;
    document.querySelector(".image").style.display = "block";
    document.querySelector(".name").style.display = "block";
    document.querySelector(".information").style.display = "block";
  } else {
    console.log("information not found");
  }
}

const clickForInfo = document.querySelector(".button");
clickForInfo.addEventListener("click", showPikachu);






