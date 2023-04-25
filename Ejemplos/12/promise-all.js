/*
    Capítulo: 12
    Descripción: El método all del objeto Promise
*/

// Declaración de funciones
function resolverPromesa(valor) {
    return Promise.resolve(valor);
}

function rechazarPromesa(valor) {
    return Promise.reject(valor);
}

// Funciones de callback
function mostrarMensaje(valores) {
	console.log(`Promesa resuelta con ${valores.length} resultados: ${valores}`);
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
Promise.all(promesasOk)
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);


// Lanzamos promesas que se resuelven (* valores distinto tipo)
var promesasDistintas = [
    resolverPromesa("A"),
    resolverPromesa(10),
    resolverPromesa({ marca: "Fiat" })
];
Promise.all(promesasDistintas)
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);


// Lanzamos promesas con una que se rechaza
var promesasError = [
    resolverPromesa(1),
    rechazarPromesa("ooops"),
    resolverPromesa(3)
];
Promise.all(promesasError)
    .then(mostrarMensaje)
    .catch(mostrarError)
    .finally(mostrarFinal);

/*** SALIDA ESPERADA ***/
/*
    Promesa resuelta con 3 resultados: 1,2,3
    La promesa ha finalizado
    
    Promesa resuelta con 3 resultados: A,10,[object Object]
    La promesa ha finalizado

    Promesa rechazada: ooops
    La promesa ha finalizado
*/