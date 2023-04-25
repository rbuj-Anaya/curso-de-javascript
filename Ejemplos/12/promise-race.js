/*
    Capítulo: 12
    Descripción: El método race del objeto Promise
*/

// Declaración de funciones
function resolverPromesa(valor) {
    return Promise.resolve(valor);
}

function rechazarPromesa(valor) {
    return Promise.reject(valor);
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

// Lanzamos promesas que se resuelven (* valores mismo tipo)
var promesasOk = [
    resolverPromesa(1),
    resolverPromesa(2),
    resolverPromesa(3)
];
Promise.race(promesasOk)
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);

// Lanzamos promesas que se resuelven (* valores distinto tipo)
var promesasDistintas = [
    resolverPromesa("A"),
    resolverPromesa(10),
    resolverPromesa({ marca: "Fiat" })
];
Promise.race(promesasDistintas)
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);

// Lanzamos promesas con una que se rechaza
var promesasError = [
    resolverPromesa(1),
    rechazarPromesa("ooops"),
    resolverPromesa(3)
];
Promise.race(promesasError)
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);

// Lanzamos promesas y se rechaza la primera
var promesasErrorPrimera = [
    rechazarPromesa("ooops"),
    resolverPromesa(2),
    resolverPromesa(3)
];
Promise.race(promesasErrorPrimera)
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);

/*** SALIDA ESPERADA ***/
/*
    Promesa resuelta: 1
    La promesa ha finalizado
    
    Promesa resuelta: A
    La promesa ha finalizado
    
    Promesa resuelta: 1
    La promesa ha finalizado

    Promesa rechazada: ooops
    La promesa ha finalizado
*/