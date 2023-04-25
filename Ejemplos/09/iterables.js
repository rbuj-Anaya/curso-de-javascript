/*
    Capítulo: 9
    Descripción: Manejando iterables
*/

// Declaramos variables
let elemento;

// Declaramos función
function contarMas(iterador) {
    let siguiente = iterador.next();

    if (siguiente.done) {
        console.log(`No tengo nada más que contar sobre mi coche`);
    
    } else {
        console.log(`Ooops, no te he contado lo último`);
    }

    return siguiente;
}

// Declaramos un objeto iterable
let map = new Map();
map.set('marca', "Fiat")
    .set('color', "Rojo")
    .set('numPlazas', 5);

// Obtenemos objeto iterador
let mapIterador = map.values();


// Recorremos el iterable
// #1 
elemento = mapIterador.next();
console.log(`Mi coche es un ${elemento.value}`);

// #2
elemento = mapIterador.next();
console.log(`Mi coche es de color ${elemento.value}`);

// Comprobar si seguimos
elemento = contarMas(mapIterador);

if (elemento.value) {
    // #3
    const { value: numPersonas } = elemento;
    console.log(`Y pueden viajar ${numPersonas} personas`);
}

// Comprobar si seguimos
contarMas(mapIterador);

/*** SALIDA ESPERADA ***/
/*
    Mi coche es un Fiat
    Mi coche es de color Rojo
    Ooops, no te he contado lo último
    Y pueden viajar 5 personas
    No tengo nada más que contar sobre mi coche
*/