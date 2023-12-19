const getPokemon = async () => {
  const ApiRouter = "https://pokeapi.co/api/v2/pokemon/charizard";
  const response = await fetch(ApiRouter);
  const dataPokemon = await response.json();
  document.getElementById("pokoemonName").innerHTML = dataPokemon.name
  document.getElementById("pokemonImg").src = dataPokemon.sprites.front_shiny

  console.log(dataPokemon);
};
getPokemon();
