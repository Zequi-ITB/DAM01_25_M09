async function conectaAPI() {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }
        const json = await res.json();
        muestraPokemon(json.results);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function muestraPokemon(pokemons){
let div = document.getElementById("pokemon");
for(let pokemon of pokemons){
    div.innerHTML += pokemon.name;
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon.name);
        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }
        const json = await res.json();
    div.innerHTML += res.species.name;    
    } catch (error) {
        console.error("Error:", error);
    }
}

}


function init() {
    let boton = document.getElementById("buscar");
    boton.addEventListener("click", conectaAPI);

    conectaAPI();
}