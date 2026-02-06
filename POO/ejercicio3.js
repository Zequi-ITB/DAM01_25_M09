class Personaje {
    nombre;
    nivel;
    hp;
    arma;

    constructor(nombre, nivel, hp, arma) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.hp = hp;
        this.arma = this.arma;
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

    constructor(nombre, nivel, hp,arma, fuerza) {
        super(nombre, nivel, hp, arma);
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

    constructor(nombre, nivel, hp,arma, mana ) {
        super(nombre, nivel, hp, arma);
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


class Espada{

}

class Hacha{

}

class BastonMagico{

}

class SinArma{


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