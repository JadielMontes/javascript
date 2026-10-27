// Conversión de texto a números
const entradaPrecio = "24.50";
const entradaCantidad = "3";
console.log("Concatenación:", entradaPrecio + entradaCantidad);
numPrecio = Number(entradaPrecio);
numCantidad = Number(entradaCantidad);
const total = numPrecio * numCantidad;
console.log("Total:", total);
numsaludo = Number("hola");
console.log("¿Es NaN?", Number.isNaN(numsaludo));
// TAREA 1: Convierte el precio con Number().
// TAREA 2: Convierte la cantidad con Number().
// TAREA 3: Calcula el total correctamente.
// TAREA 4: Prueba Number("hola") y usa Number.isNaN() para detectar el error.
