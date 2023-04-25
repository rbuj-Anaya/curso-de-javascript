/*
    Capítulo: 4
    Descripción: Manejo de excepciones (II)
*/
try {
	console.log("Primer try");
	// Segundo try-catch-finally
	try {
        console.log("Segundo try");
        // Se produce excepción: num1 no está definido
		var num2 = num1 + 3;
		console.log("num2 vale " + num2);
	} catch (excepcion) {
        console.log("Segundo catch");
        // Se produce excepción: num3 no está definido
		num2 = num3 + 5;
		console.log(`Ha ocurrido una excepción: ${excepcion}`);
	} finally {
        // Se muestra mensaje al salir del bloque try-catch
		console.log("Segundo finally");
	}
} catch (excepcion) {
    // Se muestra mensaje de la segunda excepción (num3)
	console.log("Primer catch");
	console.log(`Ha ocurrido una excepción: ${excepcion}`);
} finally {
    // Se muestra mensaje al salir del bloque try-catch
	console.log("Primer finally");
}
console.log("Finalmente fuera");

/*** SALIDA ESPERADA ***/
/*
    Primer try
    Segundo try
    Segundo catch
    Segundo finally
    Primer catch
    Ha ocurrido una excepción: ReferenceError: num3 is not defined
    Primer finally
    Finalmente fuera
*/