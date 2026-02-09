class Personaje {
    nombre;
    nivel;
    hp;
    arma = Cofre.llistatArmas[3];
    armas = [];

    constructor(nombre, nivel, hp) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.hp = hp;
        this.arma = this.arma;
        this.armas.push(this.arma);
    }


    atacar() {

    }

    toString() {
        return (this.nombre + " NIVEL: " + this.nivel + ", HP: " + this.hp);
    }

    valueOf() {
        return this.nivel;
    }

    equiparArma(nombre) {
        this.arma =  this.armas.find(arma => arma.getNom === nombre);
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

    constructor(nombre, nivel, hp,mana) {
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


class Espada {
    nom = "ESPADA";
    ataque;
    constructor(ataque) {
        this.ataque = ataque;
    }

    get getAtaque() {
        return this.ataque;
    }

    get getNom() {
        return this.nom;
    }
}

class Hacha {
    nom = "HACHA";
    ataque;
    constructor(ataque) {
        this.ataque = ataque;
    }

    get getAtaque() {
        return this.ataque;
    }

    get getNom() {
        return this.nom;
    }
}


class BastonMagico {
    nom = "BASTON MAGICO";
    ataque;
    constructor(ataque) {
        this.ataque = ataque;
    }

    get getAtaque() {
        return this.ataque;
    }

    get getNom() {
        return this.nom;
    }
}


class SinArma {
    nom = "SIN ARMA";
    ataque = 0;

    get getNom() {
        return this.nom;
    }

}

class Cofre {
    static llistatArmas = [new BastonMagico(50), new Hacha(70), new Espada(60), new SinArma()];

    static recogerArma(nombre) {
        return Cofre.llistatArmas.find(arma => arma.getNom === nombre); 
    }
}





function main() {




    let guerrero = new Guerrero("Guerrero1", 35, 1500, 250);

    let guerrero2 = new Guerrero("Guerrero2", 46, 1800, 350);

    let mago = new Mago("Mago1", 42, 1750,400);


    let arrayPersonajes = [];

    arrayPersonajes.push(guerrero);
    arrayPersonajes.push(guerrero2);
    arrayPersonajes.push(mago);

    arrayPersonajes.forEach(personaje => {

        personaje.atacar(arrayPersonajes[1]);

    });

    arrayPersonajes.sort((a, b) => a - b);

    console.log(arrayPersonajes)


    guerrero.armas.push(Cofre.recogerArma("ESPADA"));
    console.log(guerrero);

    guerrero.equiparArma("ESPADA");
    console.log(guerrero);
}

main();