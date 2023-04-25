/*
    Capítulo: 9
    Descripción: Métodos de Array
*/

// Declaración de funciones
const esPar = numero => numero % 2 == 0;

const ordenarDescendente = (a, b) => b - a;

const sumar = (acumulado, valor) => acumulado + valor;

const potencia2 = numero => numero ** 2; // Math.pow(numero, 2)

function mostrarInfo(valor, indice) {
    console.log(`- En la posición ${indice} está el valor ${valor}`);
}

// Closure
function esMayorQue(maximo) {
    return function (numero) {
        return numero > maximo;
    }
}
// Versión abreviada con funciones flecha
// const esMayorQue = maximo => numero => numero > maximo;

// Declaracion de variable
let miArray = [1, 2, 3];


// Mostramos valor inicial
console.log(`Mi array contiene: ${miArray}`);

// Añadimos elementos
miArray.push(4);
console.log(`Un elemento nuevo: ${miArray}`);

miArray = miArray.concat(5, 6);
console.log(`Dos elementos nuevos: ${miArray}`);

// Eliminamos el último elemento
var ultimo = miArray.pop();
console.log(`Después de quitar ${ultimo} nos queda: ${miArray}`);

// Eliminamos el primer elemento
var primero = miArray.shift();
console.log(`Después de quitar ${primero} nos queda: ${miArray}`);

// Restauramos primer y último elemento
miArray = [primero, ...miArray, ultimo];
console.log(`Mi array vuelve a contener: ${miArray}`);


// Mostramos valores pares
var pares = miArray.filter(esPar);
console.log(`Mi array contiene estos números pares: ${pares}`);

// Ordenamos el array en orden descendente
miArray.sort(ordenarDescendente);
console.log(`Mi array está al revés: ${miArray}`);

// Restauramos orden
miArray.reverse();
console.log(`Mi array vuelve a estar bien: ${miArray}`);


// Localizamos el índice del primer número par
var primerPar = miArray.findIndex(esPar);
console.log(`El primer número par está en el índice ${primerPar} y es el ${miArray[primerPar]}`);

// Localizamos el primer número que cumple con la condición
const mayorQueDos = esMayorQue(2);
var numeroMayorDos = miArray.find(mayorQueDos);
console.log(`El primer número mayor que 2 en mi array es el ${numeroMayorDos}`);

const mayorQueDiez = esMayorQue(10);
var numeroMayorDiez = miArray.find(mayorQueDiez);
console.log(`En mi array ${numeroMayorDiez ? "hay" : "no hay"} un número mayor que 10`);

// Comprobamos si todos/algunos elementos cumplen una condición
const todosPares = miArray.every(esPar);
const algunPar = miArray.some(esPar);
console.log(`En mi array ${todosPares ? "todos" : "no todos"} los números son pares pero ${algunPar ? "alguno" : "ninguno"} es par`);

// Sumamos todos los elementos
const suma = miArray.reduce(sumar);
// Una alternativa es utilizar valor inicial 0
// miArray.reduce(sumar, 0);
console.log(`Todos los números de mi array suman: ${suma}`);


// Mostramos índices y valores
miArray.forEach(mostrarInfo);

// Transformamos array
const arrayCuadrados = miArray.map(potencia2);
miArray.forEach((valor, indice) => {
    console.log(`- El cuadrado de ${valor} es ${arrayCuadrados[indice]}`);
});

/*** SALIDA ESPERADA ***/
/*
    Mi array contiene: 1,2,3
    Un elemento nuevo: 1,2,3,4
    Dos elementos nuevos: 1,2,3,4,5,6
    Después de quitar 6 nos queda: 1,2,3,4,5
    Después de quitar 1 nos queda: 2,3,4,5
    Mi array vuelve a contener: 1,2,3,4,5,6

    Mi array contiene estos números pares: 2,4,6
    Mi array está al revés: 6,5,4,3,2,1
    Mi array vuelve a estar bien: 1,2,3,4,5,6

    El primer número par está en el índice 1 y es el 2
    El primer número mayor que 2 en mi array es el 3
    En mi array no hay un número mayor que 10
    En mi array no todos los números son pares pero alguno es par
    Todos los números de mi array suman: 21

    - En la posición 0 está el valor 1
    - En la posición 1 está el valor 2
    - En la posición 2 está el valor 3
    - En la posición 3 está el valor 4
    - En la posición 4 está el valor 5
    - En la posición 5 está el valor 6
    - El cuadrado de 1 es 1
    - El cuadrado de 2 es 4
    - El cuadrado de 3 es 9
    - El cuadrado de 4 es 16
    - El cuadrado de 5 es 25
    - El cuadrado de 6 es 36
*/