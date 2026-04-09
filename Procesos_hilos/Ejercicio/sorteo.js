
process.stderr.write("Tarea pesada arrancada\n");


for (let i = 0; i < 100_000; i++) {
    for (let j = 0; j < 100; j++) {

    }
}


const nombre = process.argv[2];
let numeroGanador = getRandomInt(1, 10);
let mensaje = {};
if (numeroGanador == 7) {
    mensaje = { nombre: `${nombre}`, numero: 7, premio: "¡Has ganado 1000€!" }
    process.stdout.write(JSON.stringify(mensaje));
}
else {
    mensaje = { nombre: `${nombre}`, numero: numeroGanador, premio: "¡Has perdido!" }
    process.stdout.write(JSON.stringify(mensaje));
}





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
