
// capturar elementos en variables:

let boton = document.querySelector(".boton");
let color = document.querySelector("#color");
let texto = document.querySelector(".texto");
let container = document.querySelector("#container");


// Agregar evento:
boton.addEventListener("click", () => {
  let nuevoColor = color.value;
  texto.textContent = nuevoColor;
  container.style.backgroundColor = nuevoColor
})

