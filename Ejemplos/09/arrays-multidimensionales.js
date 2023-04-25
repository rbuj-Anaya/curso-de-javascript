/*
    Capítulo: 9
    Descripción: Manejando arrays multidimensionales
*/

// Declaración de constantes
const M = 0; // Turno de mañana
const T = 1; // Turno de tarde
const P1 = 0; // Primera planta
const P2 = 1; // Segunda planta


// Arrays unidimensionales
var materiaLetras = new Array("Historia", "Latín", "Filosofía");
var materiaCiencias = ["Física", "Química", "Matemáticas"];

// Arrays bidimensionales
var aula1 = new Array(materiaCiencias, materiaLetras);
var aula2 = new Array(materiaLetras, materiaCiencias);

// Array tridimensional
var plantas = new Array(aula1, aula2);

// Obtenemos valores
var primeraPlanta = plantas[P1];
var turnoTardePrimeraPlanta = primeraPlanta[T];
var primeraAsignaturaTarde = turnoTardePrimeraPlanta[0];
// Equivale a cualquiera de los siguientes accesos:
// plantas[P1][T][0];
// primeraPlanta[T][0]
console.log(`La primera asignatura de la tarde en la planta uno es ${primeraAsignaturaTarde}`);

// Obtenemos valores mediante desestructuración
var [ , segundaPlanta] = plantas;
var [ turnoMananaPlanta2, turnoTardePlanta2 ] = segundaPlanta;
var [ primeraAsignatura, ...restoAsignaturas ] = turnoTardePlanta2;
console.log(`La primera asignatura de la tarde en la planta dos es ${primeraAsignatura}`);
console.log(`Por la tarde en la planta dos hay ${restoAsignaturas.length} asignaturas más: ${restoAsignaturas.join(' y ')}`);

/*** SALIDA ESPERADA ***/
/*
    La primera asignatura de la tarde en la planta uno es Historia
    La primera asignatura de la tarde en la planta dos es Física
    Por la tarde en la planta dos hay 2 asignaturas más: Química y Matemáticas
*/