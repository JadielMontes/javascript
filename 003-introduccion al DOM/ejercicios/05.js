// EJEMPLO: querySelectorAll selecciona varios elementos.
const articulos = document.querySelectorAll(".articulo");
console.log("Cantidad:", articulos.length);
for(const producto of articulos){
    console.log(producto.textContent);
    producto.textContent = "Producto: " + producto.textContent;
}
// TAREA 1: Recorre articulos usando for...of.
// TAREA 2: Muestra el texto de cada artículo en consola.
// TAREA 3: Cambia el texto de cada artículo para que comience con "Producto: ".
