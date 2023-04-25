/*
    Capítulo: 11
    Descripción: Módulo DNI
*/

// Declaración de constante
const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKET";

// Declaración de función
export function calcularLetra(numeroDNI) {
	var posicion = numeroDNI % 23;
	return LETRAS[posicion];
}

// Declaración de función (* export por defecto)
export default function validarLetra(dni) {
	// Definimos el patrón (8 dígitos + letra)
	let patron = /^\d{8}[a-z]$/i;
	// Si cumple el patrón, comprobamos DNI
	if (patron.test(dni)) {
		// Extraemos los dígitos
		var numeroDNI = dni.substr(0, 8);
		// Extraemos la letra y pasamos a mayúsculas
        var letraDNI = dni.substr(-1).toUpperCase();
		// Comprobamos la letra
        return calcularLetra(numeroDNI) == letraDNI;
        
	// Si no cumple el patrón, lanzamos excepción
	} else {
		const mensaje = `${dni} no es un DNI`;
		throw new Error(mensaje);
	}
}
