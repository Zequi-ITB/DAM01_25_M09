function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function saveConfig() {


    setCookie("visited", true, 10);

    let input = document.getElementById("background-color");
    let colorBackground = input.value;
    setCookie("background-color", colorBackground, 10);

    input = document.getElementById("font-color");
    let colorFuente = input.value;
    setCookie("font-color", colorFuente, 10);


    // Avisamos a la ventana padre ANTES de cerrar
    if (window.opener) {
        window.opener.postMessage("config_actualizada", "*");
    }

    window.close();
}

document.getElementById("config-form").addEventListener("submit", function (event) {
    event.preventDefault();
    saveConfig();
});