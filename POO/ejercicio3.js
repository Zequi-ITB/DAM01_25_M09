class Personaje {
    nombre;
    nivel;
    hp;

    constructor(nombre, nivel, hp) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.hp = hp;
    }


    atacar() {

    }

    toString() {
        return (this.nombre + " NIVEL: " + this.nivel + ", HP: " + this.hp);
    }

    valueOf() {
        return this.nivel;
    }


}


class Guerrero extends Personaje {
    fuerza;

    constructor(nombre, nivel, hp, fuerza) {
        super(nombre, nivel, hp);
        this.fuerza = fuerza;

    }

    //METODES
    golpeEspada(personaje) {
        personaje.hp -= this.fuerza;
    }

    atacar(personaje) {
        this.golpeEspada(personaje);
    }

}


class Mago extends Personaje {
    mana;

    constructor(nombre, nivel, hp, mana) {
        super(nombre, nivel, hp);
        this.mana = mana;
    }

    //METODES
    lanzarHechizo(personaje) {
        personaje.hp -= this.mana;
    }

    atacar(personaje) {
        this.lanzarHechizo(personaje);
    }


}

function main() {

    let guerrero = new Guerrero("Guerrero1", 35, 1500, 250);
    console.log(guerrero.toString());

    let guerrero2 = new Guerrero("Guerrero2", 46, 1800, 350);

    let mago = new Mago("Mago1", 42, 1750, 400);

    let arrayPersonajes = [];

    arrayPersonajes.push(guerrero);
    arrayPersonajes.push(guerrero2);
    arrayPersonajes.push(mago);

    arrayPersonajes.forEach(personaje => {

        personaje.atacar(arrayPersonajes[1]);


    });

    arrayPersonajes.sort((a,b)=>a-b);

    console.log(arrayPersonajes)
}

main();