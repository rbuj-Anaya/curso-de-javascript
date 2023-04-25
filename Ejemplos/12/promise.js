/*
    Capítulo: 12
    Descripción: Trabajando con el objeto Promise
*/

// Declaración de funciones
function resolverPromesa(segundos, valor) {
    return new Promise(fnResolver => {
        setTimeout(_ => fnResolver(valor), segundos * 1000);
    })
}

function rechazarPromesa(segundos, valor) {
    return new Promise((fnResolver, fnRechazar) => {
        setTimeout(_ => fnRechazar(valor), segundos * 1000);
    })
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
resolverPromesa(5, "ok")
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);

// Ejecutamos promesa que se rechaza a los 2 segundos
rechazarPromesa(2, "ooops")
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);

// Ejecutamos promesa que se rechaza a los 6 segundos
rechazarPromesa(6, "cancelada")
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);

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