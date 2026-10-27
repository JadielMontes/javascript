// LABORATORIO 2: Funciones y return
// Ejemplo:
function multiplicar(a, b) { return a * b; }
console.log(multiplicar(3, 4));
const subtotal = multiplicar(12, 3);
console.log("Subtotal:", subtotal);
const descuento = 0.1;
function aplicarDescuento(subtotal, porcentaje) {
  return subtotal - (subtotal * porcentaje);
}
const total = aplicarDescuento(subtotal, descuento);
console.log("Total con descuento:", total);
// TAREA: crea calcularSubtotal(precio, cantidad).
// TAREA: crea aplicarDescuento(subtotal, porcentaje).
