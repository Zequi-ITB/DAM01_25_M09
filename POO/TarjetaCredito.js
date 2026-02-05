class TarjetaCredito {
    #_nombreCliente
    #_fechaCaducidad
    banco
    #_numeroTarjeta
    #_pin
    estado

    static Estats = {
        ACTIVA: 'ACTIVA',
        INACTIVA: 'INACTIVA'
    };



    constructor(nombre, numero, banco, caducidad, pin) {
        this.#_nombreCliente = nombre;
        this.#_numeroTarjeta = numero;
        this.banco = banco;
        this.#_fechaCaducidad = caducidad;
        this.#_pin = pin;
        this.estado = TarjetaCredito.Estats.INACTIVA;


    }




    activar() {
        this.estado = TarjetaCredito.Estats.ACTIVA;
    }

    anular() {
        this.estado = TarjetaCredito.Estats.INACTIVA;
        return true;
    }

    pagar(pin) {
        if (pin === this.#_pin && this.estado === "ACTIVA") {
            return true;
        }
        else return false;
    }

    cambiarPin(pinAntic, pinNou) {
        if (pinAntic === this.#_pin) {
            this.#_pin = pinNou;
            return true;
        }
        else return false;
    }

    get informacionTarjeta() {
        return ("Numero: " + this.#_numeroTarjeta + ", Nombre: " + this.#_nombreCliente + ", Banco: " + this.banco + ", Estado: " + this.estado);
    }



}

function probarTarjetas() {

    let tarjeta1 = new TarjetaCredito("Persona1", "1111 2222 3333 4444 5555", "Santander", "10/07/25", "123");
    console.log(tarjeta1.informacionTarjeta);

    tarjeta1.activar();
    console.log(tarjeta1.informacionTarjeta);

    let pagar = tarjeta1.pagar("123");
    if (pagar) {
        console.log("PAGO REALIZADO CON EXITO");
    }
    else console.log("ERROR: PIN INCORRECTO O TARJETA DESACTIVADA");


    let cambiarPin = tarjeta1.cambiarPin("123", "111");

    if (cambiarPin) {
        console.log("PIN CAMBIADO CON EXITO");
    }
    else console.log("ERROR: PIN INCORRECTO");

    let anular = tarjeta1.anular();
    if (anular) console.log("TARJETA ANULADA CON EXITO");

    console.log(tarjeta1.informacionTarjeta);

}

probarTarjetas();