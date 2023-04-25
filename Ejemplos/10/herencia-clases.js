/*
    Capítulo: 10
    Descripción: Herencia de clases
*/

// Declaración de clase
class Figura {
    constructor(tipo) {
        this.tipo = tipo;
        this.mensaje = `Soy un ${this.tipo}`;
    }

    static convertirEnMayusculas(cadena) {
        return cadena.toUpperCase();
    }

    mostrarNombreInstancia() {
        console.log(`Soy la instancia ${this.tipo} y mi clase es ${this.constructor.name}`);
    }
}

// Declaración de subclase
class Cuadrado extends Figura {
    constructor(color) {
        super("cuadrado");
        this.color = color;
    }

    static mostrarNombreClase() {
        // Uso de método de clase padre
        const nombre = super.convertirEnMayusculas(this.name);

        console.log(`Soy la clase ${nombre}`);
    }
}

// Creamos instancia de subclase
miCuadrado = new Cuadrado("Blanco");


// Mostramos info de la subclase
Cuadrado.mostrarNombreClase();


// Mostramos las propiedades de la instancia
for (let propiedad in miCuadrado) {
    // Filtramos las propiedades que no sean función
    const valor = miCuadrado[propiedad];
    if (typeof valor != "function") {
        console.log(`- La propiedad ${propiedad} tiene valor ${valor}`);
    }
}


// Mostramos info de la instancia (* método heredado)
miCuadrado.mostrarNombreInstancia();

/*** SALIDA ESPERADA ***/
/*
    Soy la clase CUADRADO
    
    - La propiedad tipo tiene valor cuadrado (* propiedad heredada)
    - La propiedad mensaje tiene valor Soy un cuadrado (* propiedad heredada)
    - La propiedad color tiene valor Blanco

    Soy la instancia cuadrado y mi clase es Cuadrado
*/