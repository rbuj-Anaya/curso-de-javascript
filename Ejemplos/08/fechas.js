/*
    Capítulo: 8
    Descripción: Trabajando con fechas
*/

// Array con los días de la semana
const SEMANA = [
    'Domingo',      // 0
    'Lunes',        // 1
    'Martes',       // 2
    'Miércoles',    // 3
    'Jueves',       // 4
    'Viernes',      // 5
    'Sábado'        // 6
];

// Declaración de funciones
function obtenerUltimoDia(fecha) {
	const anio = fecha.getFullYear();
	const mes = fecha.getMonth();
	var ultimoDia = new Date(anio, mes + 1, 0);
	// Obtenemos el último día
	return ultimoDia.getDate();
}

function esBisiesto(fecha) {
	const anio = fecha.getFullYear();
	return (anio % 4 == 0 && anio % 100 != 0) ||
		(anio % 400 == 0);
}

function esBisiestoPorDias(fecha) {
	const anio = fecha.getFullYear();
	var febrero = new Date(anio, 1);
	return obtenerUltimoDia(febrero) == 29;
}

function pasarDiaSiguiente(fecha) {
	const dia = fecha.getDate();
	fecha.setDate(dia + 1);
}


// Simulamos fecha actual
let hoy = new Date("Apr 17 2008 20:45:34");

// Mostramos día actual
const mes = hoy.toLocaleDateString('es', { month: 'long' });
let diaSemana = SEMANA[hoy.getDay()];
let diaMes = hoy.getDate();
console.log(`Hoy es ${diaSemana}, ${diaMes} de ${mes}`);

// Cambiamos fecha al día siguiente
pasarDiaSiguiente(hoy);
diaSemana = SEMANA[hoy.getDay()];
diaMes = hoy.getDate();
console.log(`Mañana es ${diaSemana}, ${diaMes} de ${mes}`);

// Mostramos los días del mes
const diasMes = obtenerUltimoDia(hoy);
console.log(`El mes ${mes} tiene ${diasMes} días`);

// Mostramos si el año es bisiesto
const anio = hoy.getFullYear();
const bisiesto = esBisiesto(hoy);
console.log(`El año ${anio} ${ bisiesto ? "es" : "no es" } bisiesto`);
const bisiestoPorDias = esBisiestoPorDias(hoy);
console.log(`El mes de febrero del año ${anio} tiene ${ bisiestoPorDias ? 29 : 28 } días`);

/*** SALIDA ESPERADA ***/
/*
    Hoy es Jueves, 17 de abril
    Mañana es Viernes, 18 de abril
    El mes abril tiene 30 días
    El año 2008 es bisiesto
    El mes de febrero del año 2008 tiene 29 días
*/