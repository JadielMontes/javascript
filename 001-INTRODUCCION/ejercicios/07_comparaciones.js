// Comparaciones y operadores lógicos
const edad = 20;
const tieneEntrada = true;
console.log("Edad:", edad);
console.log("¿Mayor de edad?", edad >= 18);
console.log("¿Tiene entrada?", tieneEntrada);
if (edad >= 18 && tieneEntrada) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}   
const descuentoEstudiante = true;
const descuentoAdultoMayor = false;
if (descuentoEstudiante && edad >= 18 || descuentoAdultoMayor && edad >= 65) {
  console.log("Descuento aplicado");
} else {
  console.log("No hay descuento");
}
// TAREA 1: Permite ingresar si tiene 18 años o más Y tiene entrada.
// TAREA 2: Muestra "Acceso permitido" o "Acceso denegado".
// TAREA 3: Prueba varias combinaciones de edad y entrada.
// TAREA 4: Crea una condición con OR (||) para descuento estudiantil o adulto mayor.
