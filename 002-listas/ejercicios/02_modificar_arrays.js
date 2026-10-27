// LABORATORIO 2: Modificar una lista
const productos = ["Mouse", "Teclado", "Monitor"];
console.log("Inicial:", productos);
productos.push("Webcam");
console.log("Agregando Webcam:", productos);
productos.pop();
console.log("Eliminando el último producto:", productos);
productos[0] = "Audifonos";
console.log("Reemplazando Mouse por Audifonos:", productos);
// TAREA: agrega Webcam, elimina el ultimo y reemplaza Teclado por Audifonos.
