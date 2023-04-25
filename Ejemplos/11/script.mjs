/*
    Capítulo: 11
    Descripción: Importación de módulos
*/

// Importación de elementos
import { default as validarLetra, calcularLetra } from './dni.mjs';

// Declaración de constantes
const numeroDNI = 12345678;

// Declaración de funciones
const comprobarValidez = valido => `${valido ? "es" : "no es"} válido`;

function manejarExcepcion(excepcion) {
    console.error(`Ocurrió un problema: ${excepcion.message}`);
}

// Uso de elemento
var letra = calcularLetra(numeroDNI);
console.log(`A mi DNI ${numeroDNI} le corresponde la letra ${letra}`);


// Declaración de constantes
const miDNI = `${numeroDNI}${letra}`;
const miDNIFalso = `${numeroDNI}A`;

// Uso de elemento por defecto (sin error)
try {
    const dniValido = validarLetra(miDNI);
    console.log(`Mi DNI ${miDNI} ${comprobarValidez(dniValido)}`);

} catch (excepcion) {
    manejarExcepcion(excepcion);
}

// Uso de elemento por defecto (sin error)
try {
    const dniValido = validarLetra(miDNIFalso);
    console.log(`Mi DNI ${miDNIFalso} ${comprobarValidez(dniValido)}`);

} catch (excepcion) {
    manejarExcepcion(excepcion);
}

// Uso de elemento por defecto (con error)
try {
    const cadena = "javascript";
    const dniValido = validarLetra(cadena);
    console.log(`Mi DNI ${cadena} ${comprobarValidez(dniValido)}`);

} catch (excepcion) {
    manejarExcepcion(excepcion);
}

/*** SALIDA ESPERADA ***/
/*
    A mi DNI 12345678 le corresponde la letra Z
    Mi DNI 12345678Z es válido
    Mi DNI 12345678A no es válido
    Ocurrió un problema: javascript no es un DNI
*/