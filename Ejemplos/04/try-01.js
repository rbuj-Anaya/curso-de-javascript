/*
    Capítulo: 4
    Descripción: Manejo de excepciones (I)
*/
try {
    console.log("Inicio try");
    // Se produce excepción: num1 no está definido
	var num2 = num1 + 3;
	console.log("num2 vale " + num2);
} catch (excepcion) {
    console.log("Inicio catch");
    // Se produce excepción: num3 no está definido
	num2 = num3 + 5;
	console.log(`Ha ocurrido una excepción: ${excepcion}`);
} finally {
    // Se muestra mensaje al salir del bloque try-catch
	console.log("Hemos terminado");
}
// No se muestra porque no se captura la segunda excepción dentro del catch (num3)
console.log("Fuera del try");

/*** SALIDA ESPERADA ***/
/*
    Inicio try
    Inicio catch
    Hemos terminado
    ReferenceError: num3 is not defined
*/