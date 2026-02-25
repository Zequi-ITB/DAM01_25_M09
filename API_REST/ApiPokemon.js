async function conectaAPI(eleccio) {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + eleccio);
        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }
        const json = await res.json();
        let div = document.getElementById("pokemon");
        div.innerHTML = "";

        muestraPokemon(json, div);
    } catch (error) {
        console.error("Error:", error);
    }
}



async function muestraPokemon(pokemon, div) {

    try {

        let nom = document.createElement("div");
        let id = document.createElement("div");
        let type = document.createElement("div");
        let img = document.createElement("img");

        nom.innerHTML = "Pokemon: " + pokemon.name;
        id.innerHTML = "ID: " + pokemon.id
        type.innerHTML = "TIPO: " + pokemon.types[0].type.name;
        img.src = pokemon.sprites.other["official-artwork"].front_default || "";


        div.appendChild(nom);
        div.appendChild(id);
        div.appendChild(type);
        div.appendChild(img);


    } catch (error) {
        console.error("Error:", error);

    }
}


let boton = document.getElementById("buscar");

boton.addEventListener("click", () => {
    let eleccio = document.getElementById("input").value;
    conectaAPI(eleccio);
});


//Mostrar 4 pokemons 
async function init() {
    try {
        //Conectar a 4 de la llista
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=4");
        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }
        //Esperar resposta
        const json = await res.json();


        //Fer llista dels objectes
        let pokemons = json.results;
        for (let pokemon of pokemons) {
            try {
                //Conectem amb la api de cada pokemon especific.
                const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name);
                if (!res.ok) {
                    throw new Error(`Error HTTP ${res.status}`);
                }
                const json = await res.json();
                let div = document.getElementById("pokemon");

                muestraPokemon(json, div);
            } catch (error) {
                console.error("Error:", error);
            }
        }

    } catch (error) {
        console.error("Error:", error);
    }

}


