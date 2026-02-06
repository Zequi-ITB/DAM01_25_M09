class FiguraGeometrica {
    nom;

    constructor(nom) {
        this.nom = nom;
    }


    calcularArea() {

    }


}


class Rectangle extends FiguraGeometrica {

    constructor(nom, base, altura) {
        super(nom);
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Triangle extends FiguraGeometrica {

    constructor(nom, base, altura) {
        super(nom);
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

}


class Cercle extends FiguraGeometrica {
    constructor(nom, radi) {
        super(nom);
        this.radi = radi;
    }

    calcularArea() {
        return Math.pow(this.radi, 2) * Math.PI;
    }


}


function main() {
    let cercle = new Cercle("cercle", 5.50);
    console.log("Area " + cercle.nom + ": " + cercle.calcularArea());


    let rectangle = new Rectangle("rectangle", 10, 6);
    console.log("Area " + rectangle.nom + ": " + rectangle.calcularArea());

    let triangle = new Triangle("triangle", 5, 10);
    console.log("Area " + triangle.nom + ": " + triangle.calcularArea());
}

main();

