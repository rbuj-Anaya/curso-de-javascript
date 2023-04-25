/*
    Capítulo: 5
    Descripción: Recursividad
*/

// Declaración de función
function calcularSumatorio(hasta) {
    // Condición de parada
    if (hasta == 0) {
        return 0;
        // Realizamos operaciones
    } else {
        console.log(`Sumamos ${hasta}`);
        return hasta + calcularSumatorio(hasta - 1);
    }
}


// Llamada a la función
console.log(calcularSumatorio(5));

/*** SALIDA ESPERADA ***/
/*
    Sumamos 5
    Sumamos 4
    Sumamos 3
    Sumamos 2
    Sumamos 1
    15
*/