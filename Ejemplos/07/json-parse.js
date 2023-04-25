/*
    Capítulo: 7
    Descripción: Método parse del objeto JSON
*/

// Declaración de funciones
function enMayusculas(clave, valor) {
    return (typeof valor === "string") ? valor.toUpperCase() : valor;
}

function quitarTexto(clave, valor) {
    return (typeof valor === "string") ? undefined : valor;
}

// Declaración de variable
var texto = '{"marca": "Fiat", "numeroPlazas": 5, "descripcion":"Fiat viene de las siglas \\"Fabbrica Italiana Automobili Torino\\"."}';


// Creación de objeto JSON
console.log('- Conversión a JSON');
console.log(JSON.parse(texto).toSource());

// Creación de objeto JSON con función
console.log('- Conversión a JSON con función');
console.log(JSON.parse(texto, enMayusculas));

// Creación de objeto JSON otra función
console.log('- Conversión a JSON otra función');
console.log(JSON.parse(texto, quitarTexto));

/*** SALIDA ESPERADA ***/
/*
    - Conversión a JSON
    Object { marca: "Fiat", numeroPlazas: 5, descripcion: "Fiat viene de las siglas \"Fabbrica Italiana Automobili Torino\"." }

    - Conversión a JSON con función
    Object { marca: "FIAT", numeroPlazas: 5, descripcion: "FIAT VIENE DE LAS SIGLAS \"FABBRICA ITALIANA AUTOMOBILI TORINO\"." }

    - Conversión a JSON otra función
    Object { numeroPlazas: 5 }
*/