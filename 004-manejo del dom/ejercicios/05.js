const resultado = document.querySelector("#resultado");
const inputPrecio = document.querySelector("#precio");
const inputCantidad = document.querySelector("#cantidad");
const botonCalcular = document.querySelector("#calcular");

botonCalcular.addEventListener("click", function () {
  const precio = Number(inputPrecio.value);
  const cantidad = Number(inputCantidad.value);
  const precioValido = inputPrecio.value.trim() !== "" && precio >= 0;
  const cantidadValida = Number.isInteger(cantidad) && cantidad > 0;
  if (precioValido && cantidadValida) {
    const total = precio * cantidad;
    resultado.textContent = "Total: " + total.toFixed(2);
  } else {
    resultado.textContent = "Error: introduce un precio válido (≥ 0) y una cantidad entera positiva.";
  }
});
// TAREA 1: Lee el precio y la cantidad cuando se pulse #calcular.
// TAREA 2: Convierte ambos valores con Number().
// TAREA 3: Valida que precio >= 0 y cantidad sea entero positivo.
// TAREA 4: Muestra el total con toFixed(2) o un mensaje de error.
