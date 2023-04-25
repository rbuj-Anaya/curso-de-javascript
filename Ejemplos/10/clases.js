/*
    Capítulo: 10
    Descripción: Manejo de clases
*/

// Declaración de función
function mostrarNombre() {
    console.log(`Soy la instancia ${this.tipo} y mi clase es ${this.constructor.name}`);
}

// Declaración de clase
class Figura {
	constructor(tipo) {
		this.tipo = tipo;
		this.mensaje = `Soy un ${this.tipo}`;
    }
    
    static mostrarNombreClase() {
        console.log(`Soy la clase ${this.name}`);
    }

    mostrarNombreInstancia = mostrarNombre;
}

// Creamos una instancia
var miFigura = new Figura("cuadrado");


// Mostramos info de la clase
Figura.mostrarNombreClase();


// Mostramos las propiedades de la instancia
for(let propiedad in miFigura) {
    // Filtramos las propiedades que no sean función
    const valor = miFigura[propiedad];
    if (typeof valor != "function") {
        console.log(`- La propiedad ${propiedad} tiene valor ${valor}`);
    }
}


// Mostramos info de la instancia
miFigura.mostrarNombreInstancia();

/*** SALIDA ESPERADA ***/
/*
    Soy la clase Figura
    
    - La propiedad tipo tiene valor cuadrado
    - La propiedad mensaje tiene valor Soy un cuadrado

    Soy la instancia cuadrado y mi clase es Figura
*/