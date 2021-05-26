function cargarListado(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(function (response) {
      return response.json();
    })
    .then(function (objetoJson) {
      const pokemons = objetoJson.results;
      console.log(pokemons);
      pokemons.forEach(element => {
        crearBoton(element);
      });
  
    });
}
cargarListado();


function crearBoton(poke) {
  let capsula = `<button onclick="cargarPokemon('${poke.url}')">${poke.name}</button>`;
  document.getElementById("contenedor-listado").innerHTML+=capsula;
}

//obtengo la informacion de un pokemon puntual
function cargarPokemon(url){
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (objetoJson) {
      const pokemon = objetoJson;
      console.log(pokemon);
      crearCarta(pokemon);
  
    });
}

function crearCarta(poke){
  let plantilla = `
  <h3>${poke.name}</h3>
  <img src="${poke.sprites.front_default}" alt=""> 
  `;
  let carta = document.getElementById('contenedor-carta');
  carta.innerHTML= plantilla;
}