/*
    Capítulo: 12
    Descripción: Encadenando promesas
*/

// Declaración de variable
let suma = 0;

// Declaración de funciones
function lanzarPromesa(valor) {
    return Promise.resolve(valor);
}

async function sumarPromesas() {
    // Encadenamos promesas que suman números (simulando sincronismo)
    suma += await lanzarPromesa(1);
    suma += await lanzarPromesa(2);
    suma += await lanzarPromesa(3);
}

// Encadenamos promesas que suman números
lanzarPromesa(1)
    .then(numero => {
        suma += numero;

        return lanzarPromesa(4);
    })
    .then(numero => {
        suma += numero;

        return lanzarPromesa(5);
    })
    .then(numero => {
        suma += numero;

        console.log(`La suma parcial es: ${suma}`);

        // Lanzamos otra función con promesas
        return sumarPromesas();
    })
    .finally(_ => {
        console.log(`La suma total es: ${suma}`);
    });

/*** SALIDA ESPERADA ***/
/*
    La suma parcial es: 10
    La suma total es: 16
*/