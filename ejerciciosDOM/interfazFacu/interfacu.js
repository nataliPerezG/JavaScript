import { datos } from "./js/datos.js"

// Elementos del html:
let container = document.getElementById("container");
let btn = document.getElementById("btn")

for (let alumno of datos) {

  let { nombre, email, materia } = alumno;

  let elementoDinamico = `
  <div class="grid-item nombre">${nombre}</div>
  <div class="grid-item email">${email}</div>
  <div class="grid-item materia">${materia}</div>
  <div class="grid-item semana">
    <select class="semana-elegida">
      <option value="Sem Uno">Semana Uno</option>
      <option value="Sem Dos">Semana Dos</option>
    </select>
  </div>
  `
  container.innerHTML += elementoDinamico;
}

btn.addEventListener("click", () => {

  let confirmar = confirm("Deseas confirmar las semanas");

  if (confirmar) {

    document.querySelector("main").removeChild(btn);

    let semanas = document.querySelectorAll(".semana");
    let opcionesDeSemana = document.querySelectorAll(".semana-elegida");

    for (let elem in semanas) {
      let semana = semanas[elem]
      semana.innerHTML = opcionesDeSemana[elem].value;
    }

  }

}
)


