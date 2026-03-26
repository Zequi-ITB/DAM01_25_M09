// Función para obtener el valor de una cookie
function getCookie(name) {
    return document.cookie
        .split('; ')
        .find(c => c.startsWith(name + '='))
        ?.split('=')[1]
        ?? null;
}

function changeConfig(backgroundColor, colorFont) {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = colorFont;
}

// Escuchamos el mensaje de la ventana hija
window.addEventListener("message", function (event) {
    if (event.data === "config_actualizada") {
        let colorFons = getCookie("background-color").replace("%23", "#");
        let colorFont = getCookie("font-color").replace("%23", "#");

        changeConfig(colorFons, colorFont);
    }
});

function init() {
    const visited = getCookie("visited");
    if (!visited) {
        // Abrimos el popup
        window.open('popUP.html', 'Config', 'width=600,height=400');
    }
    // Aplicamos lo que ya haya (si existe)
    let colorFons = getCookie("background-color").replace("%23", "#");
    let colorFont = getCookie("font-color").replace("%23", "#");
    changeConfig(colorFons, colorFont);
}

// Ejecutamos al cargar
init();