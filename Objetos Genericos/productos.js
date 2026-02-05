const productosJSON = `[
  {
    "id": "TSH01",
    "nombre": "MACACARENA",
    "descripcion": "Quan balles sense vergonya i el ritme et domina.",
    "precioBase": 19.95,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro", "mostaza"],
    "imagenes": {
      "blanco": "img/MACACARENA.png",
      "negro": "img/MACACARENA_BLACK.png",
      "mostaza": "img/MACACARENA.png"
    },
    "tags": ["nuevo"]
  },
  {
    "id": "TSH02",
    "nombre": "NINETIES MODE",
    "descripcion": "Un homenatge pixelat als anys 90.",
    "precioBase": 21.50,
    "tallas": ["S", "M", "L", "XL", "XXL"],
    "colores": ["gris", "negro"],
    "imagenes": {
      "gris": "img/NINETIES.png",
      "negro": "img/NINETIES_BLACK.png"
    },
    "tags": ["retro"]
  },
  {
    "id": "TSH03",
    "nombre": "RESERVOIR INVADERS",
    "descripcion": "Quan Tarantino coneix els videojocs clàssics.",
    "precioBase": 22.90,
    "tallas": ["M", "L", "XL"],
    "colores": ["azul", "negro"],
    "imagenes": {
      "azul": "img/RESERVOIR.png",
      "negro": "img/RESERVOIR_BLACK.png"
    },
    "tags": ["edicion-especial"]
  },
  {
    "id": "TSH04",
    "nombre": "VITRUVIAN CODE",
    "descripcion": "Art, codi i proporció perfecta.",
    "precioBase": 24.00,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro"],
    "imagenes": {
      "blanco": "img/VITRUVIAN.png",
      "negro": "img/VITRUVIAN_BLACK.png"
    },
    "tags": ["premium"]
  }
]
`;

function init() {

}

let productos = JSON.parse(productosJSON);
console.log(productos);

function muestraProducto() {
  let contenidor = document.createElement("div");
  contenidor.className = "contGeneral";
  for (let producto of productos) {
    let article = document.createElement('article');
    let img = crearImagen(producto);
    let h2 = document.createElement("h2");
    h2.textContent = producto.nombre;
    let p = document.createElement("p");
    p.textContent = producto.descripcion;

    let preu = document.createElement("p");
    preu.textContent = producto.precioBase;

    article.append(img);
    article.append(h2);
    article.append(p);
    article.append(preu);

    let talla = crearTallas(producto);

    article.append(talla);

    let colors = crearColor(producto);
    article.append(colors);

    let boton = crearBoton();
    article.append(boton);



    contenidor.append(article);
  }
  document.body.append(contenidor);



}


function crearImagen(producto) {
  let img = document.createElement("img");
  img.src = Object.values(producto.imagenes)[0];

  return img;
}


function crearTallas(producto) {
  let talla = document.createElement("select");
  producto.tallas.forEach(t => {
    let option = document.createElement("option");
    option.textContent = t;
    talla.append(option);
  })

  return talla;
}

function crearColor(producto) {
  let contenidor = document.createElement("div");
  let contenidor2 = document.createElement("div");
  contenidor2.className = "contColor";
  let h3 = document.createElement("h4");
  h3.textContent = "Color: "
  contenidor.append(h3);
  producto.colores.forEach(c => {
    let color = document.createElement("div");
    color.textContent = c;
    contenidor2.append(color);
  })
  contenidor.append(contenidor2);

  return contenidor;
}

function crearBoton(){
  let boton = document.createElement("div");
  boton.className = "botonCarrito";
  boton.textContent = "AÑADIR AL CARRITO";
  
  return boton;
}



muestraProducto();


