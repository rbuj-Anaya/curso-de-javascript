/*
    Capítulo: 14
    Descripción: Eventos en BackEnd
*/

// Importación de elementos
import { EventEmitter } from 'events';

// Declaración de variable
var miEmitter = new EventEmitter();

// Declaración de funciones
function mostrarMinusculas(texto) {
    console.log(`En minúsculas: ${texto.toLowerCase()}`);
}

function mostrarMayusculas(texto) {
    console.log(`En mayúsculas: ${texto.toUpperCase()}`);
}

function mostrarListeners() {
    // Obtenemos eventos con manejador
    var eventos = miEmitter.eventNames();
    console.log("\n");

    eventos.forEach(evento => {
        const contador = miEmitter.listenerCount(evento);
        console.log(`## El evento ${evento} tiene ${contador} listeners`);
    });
}


// Añadimos manejadores especiales
console.log("-- Manejadores especiales --");
miEmitter.on("removeListener", (evento, fnListener) => {
	console.log(`** Manejador eliminado para evento "${evento}"`);
	fnListener("Prueba de callback");
});

miEmitter.on("newListener", (evento, fnListener) => {
	console.log(`** Nuevo manejador para evento "${evento}"`);
    fnListener("Prueba de callback");
});

// Añadimos manejadores
miEmitter
	.on("mensaje", mostrarMinusculas)
	.on("mensaje", mostrarMayusculas);
    
// Mostramos los contadores de listeners
mostrarListeners();

// Generamos evento
console.log("\n-- Generamos evento \"mensaje\" --");
miEmitter.emit("mensaje", "Buenos días");



// Eliminamos un manejador
console.log("\n-- Eliminamos manejador (minúsculas) --");
miEmitter.off("mensaje", mostrarMinusculas);

// Mostramos los contadores de listeners
mostrarListeners();

// Generamos evento
console.log("\n-- Generamos evento \"mensaje\" --");
miEmitter.emit("mensaje", "Buenos días");

/*** SALIDA ESPERADA ***/
/*
    -- Manejadores especiales --
    ** Nuevo manejador para evento "mensaje"
    En minúsculas: prueba de callback
    ** Nuevo manejador para evento "mensaje"
    En mayúsculas: PRUEBA DE CALLBACK


    ## El evento removeListener tiene 1 listeners
    ## El evento newListener tiene 1 listeners
    ## El evento mensaje tiene 2 listeners

    -- Generamos evento "mensaje" --
    En minúsculas: buenos días
    En mayúsculas: BUENOS DÍAS

    -- Eliminamos manejador (minúsculas) --
    ** Manejador eliminado para evento "mensaje"
    En minúsculas: prueba de callback


    ## El evento removeListener tiene 1 listeners
    ## El evento newListener tiene 1 listeners
    ## El evento mensaje tiene 1 listeners

    -- Generamos evento "mensaje" --
    En mayúsculas: BUENOS DÍAS
*/