
// Ex 1 Fase 1 y 2

document.getElementById("titular").textContent = "TITULAR DRAMATICO!!!";
document.getElementById("autor").textContent = "Ezequiel Carracedo";
document.getElementById("cuerpo-noticia").textContent = "Esta es la nueva noticia locasdlkgjsogsdflgndflgmdflkvmfdlmflvmdflkvdflkvmrlkdflbkvmdflvbkkmdflkdfmlkdfmvlkdfmvlxdfvblkdfblfxnlglgmlsdfgmsflkgmlsdfkgmlkfg";
document.getElementById("input-comentario").value = 'No me lo puedo creer, es increible!';


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


articleNou.append(img);
document.body.append(articleNou);



//Afegir enunciat

//Div
let div = document.createElement("div");
//nom class
div.setAttribute("class","enunciat");

//titol
let parraf = document.createElement("h3");
parraf.innerHTML = ("Resolución: ");

//imatges exercici i enunciat
let imgExercici = document.createElement("img");
imgExercici.src = "imatges/Ex1y2.png";
let imgEnunciat = document.createElement("img");
imgEnunciat.src = "imatges/enunciat1y2.png";
let imgExercici2 = document.createElement("img");
imgExercici2.src = "imatges/ex1f3.png";
let imgEnunciat2 = document.createElement("img");
imgEnunciat2.src = "imatges/ex1fase3.png";

//article
let articleNou2 = document.createElement("article");
articleNou2.append(parraf);
div.append(imgEnunciat);
div.append(imgExercici);
div.append(imgEnunciat2);
div.append(imgExercici2);

articleNou2.append(div);

//afegim al final del document.
document.body.append(articleNou2);









