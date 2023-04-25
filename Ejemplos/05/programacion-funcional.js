/*
    Capítulo: 5
    Descripción: Programación funcional
*/
let resultado;

// Definición de closure con dos niveles hijo
function calcularVolumen(ancho) {
	// Función hija de calcularVolumen y padre de la siguiente
	return function(alto) {
		// Función hija
		return function(profundo) {
			return ancho * alto * profundo;
		}
	}
}


// Uso de closure
resultado = calcularVolumen(2)(3)(10);
console.log('Closure completo:', resultado);

// Definición de función para figuras con ancho fijo
var figuraAnchoDos = calcularVolumen(2);
// Cálculo de volumen
resultado = figuraAnchoDos(3)(10);
console.log('Closure con ancho fijo:', resultado);

// Definición de función para figuras con ancho y alto fijo
var figuraAnchoDosAltoTres = figuraAnchoDos(3);
// Cálculo de volumen
resultado = figuraAnchoDosAltoTres(10);
console.log('Closure con ancho y alto fijo:', resultado);

/*** SALIDA ESPERADA ***/
/*
    Closure completo: 60
    Closure con ancho fijo: 60
    Closure con ancho y alto fijo: 60
*/