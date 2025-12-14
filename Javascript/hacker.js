
// Ex 1 Fase 1 y 2

document.getElementById("titular").textContent = "TITULAR DRAMATICO!!!";
document.getElementById("autor").textContent = "Ezequiel Carracedo";
document.getElementById("cuerpo-noticia").textContent = "Esta es la nueva noticia locasdlkgjsogsdflgndflgmdflkvmfdlmflvmdflkvdflkvmrlkdflbkvmdflvbkkmdflkdfmlkdfmvlkdfmvlxdfvblkdfblfxnlglgmlsdfgmsflkgmlsdfkgmlkfg";
document.getElementById("input-comentario").value = 'Ezequiel Carracedo';


// Ex 1 fase 3

//Copiar estructura del article existent.
let articleOriginal = document.querySelector("article");

//Clonem la seva estructura
let articleNou = articleOriginal.cloneNode(true);


//Modifiquem el contingut del article.
articleNou.querySelector("h1").textContent = "Este es mi nuevo titular";
articleNou.querySelector("#cuerpo-noticia").textContent = "Este es el nuevo cuerpo de la noticia";

//Creem una imatge per insertarla
let img = document.createElement("img")
img.src = "images.jpeg"


articleNou.append(img)
document.body.append(articleNou);









