
// capturar elementos en variables:

let color = document.querySelector("#color");
let texto = document.querySelector(".texto");
let container = document.querySelector("#container");



color.addEventListener("change", () => {
  let nuevoColor = color.value;
  texto.textContent = nuevoColor;
  container.style.backgroundColor = nuevoColor
})