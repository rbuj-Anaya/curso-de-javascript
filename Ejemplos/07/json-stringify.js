/*
    Capítulo: 7
    Descripción: Método stringify del objeto JSON
*/

// Declaración de función
function quitarTexto(clave, valor) {
    return (typeof valor === "string") ? undefined : valor;
}

// Objeto definido con llaves
var unCoche = {
    marca: "Fiat",
    numeroPlazas: 5,
    descripcion: `Fiat viene de las siglas "Fabbrica Italiana Automobili Torino".`
};


// Conversión simple
console.log('- Conversión simple');
console.log(JSON.stringify(unCoche));

// Conversión con función
console.log('- Conversión con función');
console.log(JSON.stringify(unCoche, quitarTexto));

// Conversión solo con espaciado
console.log('- Conversión solo con espaciado');
console.log(JSON.stringify(unCoche, null, 5));

// Conversión con función y espaciado
console.log('- Conversión con función y espaciado');
console.log(JSON.stringify(unCoche, quitarTexto, 5));

/*** SALIDA ESPERADA ***/
/*
    - Conversión simple
    {"marca":"Fiat","numeroPlazas":5,"descripcion":"Fiat viene de las siglas \"Fabbrica Italiana Automobili Torino\"."}
    
    - Conversión con función
    {"numeroPlazas":5}
    
    - Conversión solo con espaciado
    {
        "marca": "Fiat",
        "numeroPlazas": 5,
        "descripcion": "Fiat viene de las siglas \"Fabbrica Italiana Automobili Torino\"."
    }
    
    - Conversión con función y espaciado
    {
        "numeroPlazas": 5
    }
*/