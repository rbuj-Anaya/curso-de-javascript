/*
    Capítulo: 12
    Descripción: Trabajando con promesas
*/

// Declaración de funciones
function simularAsincronia(segundos, callback) {
    setTimeout(callback, segundos * 1000);
}

function resolverPromesa() {
    Promise.resolve("ok")
        .then(mostrarMensaje)
        .catch(mostrarError)
        .finally(mostrarFinal);
}

function rechazarPromesa() {
    Promise.reject("ooops")
        .then(mostrarMensaje)
        .catch(mostrarError)
        .finally(mostrarFinal);
}

function rechazarPromesaThen() {
    Promise.reject("cancelada")
        .then(mostrarMensaje, mostrarError)
        .finally(mostrarFinal);
}

// Funciones de callback
function mostrarMensaje(valor) {
    console.log(`Promesa resuelta: ${valor}`);
}
function mostrarError(error) {
    console.log(`Promesa rechazada: ${error}`);
}
function mostrarFinal() {
    console.log("La promesa ha finalizado");
}

// Ejecutamos promesa que se resuelve a los 5 segundos
simularAsincronia(5, resolverPromesa);

// Ejecutamos promesa que se rechaza a los 2 segundos
simularAsincronia(2, rechazarPromesa);

// Ejecutamos promesa que se rechaza a los 6 segundos
simularAsincronia(6, rechazarPromesaThen);

/*** SALIDA ESPERADA ***/
/*
    [DESPUÉS DE 2 SEGUNDOS]
    Promesa rechazada: ooops
    La promesa ha finalizado

    [DESPUÉS DE 5 SEGUNDOS]
    Promesa resuelta: ok
    La promesa ha finalizado
    
    [DESPUÉS DE 6 SEGUNDOS]
    Promesa rechazada: cancelada
    La promesa ha finalizado
*/