/*
    Capítulo: 8
    Descripción: Trabajando con objetos
*/


// Declaración de objetos
var unCoche = {
	marca: "Fiat",
    numPlazas: 5,
    color: "Blanco",
	acelerar: function () {
		console.log("brummm");
	}
};
var colorCoche = {
	color: "Azul"
};


// Mostramos color actual
console.log(`Mi coche es de color ${unCoche.color}`);

// Repintamos coche
unCoche.color = "Rojo";

// Mostramos nuevo color
console.log(`Mi coche ahora es ${unCoche.color}`);

// Clonamos coche
var nuevoCoche = Object.assign({}, unCoche);
console.log(`Me he comprado otro ${nuevoCoche.marca} ${nuevoCoche.color}`);

// Repintamos nuevo coche
Object.assign(nuevoCoche, colorCoche);

// Mostramos nuevo color
const { marca, color } = nuevoCoche;
console.log(`He repintado mi nuevo ${marca} de ${color}`);

// Clonamos coche (alternativa)
const otroCoche = { marca: "Honda" };
const ultimoCoche = { ...otroCoche, ...colorCoche };

// Mostramos último coche
const { marca: miMarca, color: miColor } = ultimoCoche;
console.log(`Me gustaría comprarme un ${miMarca} ${miColor} algún día`);

/*** SALIDA ESPERADA ***/
/*
    Mi coche es de color Blanco
    Mi coche ahora es Rojo
    Me he comprado otro Fiat Rojo
    He repintado mi nuevo Fiat de Azul
    Me gustaría comprarme un Honda Azul algún día
*/