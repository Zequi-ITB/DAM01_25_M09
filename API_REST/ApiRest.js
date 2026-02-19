async function conectaAPI() {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }
        const json = await res.json();
        muestraChiste(json.value);
    } catch (error) {
        console.error("Error:", error);
    }
}

function muestraChiste(json) {
    let chiste = document.getElementById("chistes");
    chiste.innerHTML = json;

}

function init() {
    let boton = document.getElementById("masChistes");
    boton.addEventListener("click", conectaAPI);

    conectaAPI();
}