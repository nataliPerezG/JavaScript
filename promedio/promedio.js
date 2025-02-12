
// Elementos desde el html:

let nota = document.getElementById("nota");
let btn = document.getElementById("asignar");
let modal = document.querySelector(".modal-bg");
let closedModal = document.querySelector(".cerrar");
let resultado = document.querySelector(".res");
let frase = document.querySelector(".promedio");

// Funciones:

const comprobarDato = (nota) => {

  try {
    if (isNaN(nota)) {
      throw error = {
        nombre: "Error de valor",
        mensaje: "Solo tenías que pasar un número..."
      }
    }

  } catch (error) {
    nota = null;
    console.log(nota);
    console.log(error.mensaje);
  }

}

const promedio = (promedio, ...notas) => {

  let nota = notas.reduce((ac, curt) => ac + curt)
  let promd = nota / promedio;
  return promd

}

const verificarAprobacion = (dato, promExigido) => {

  try {
    if (isNaN(dato)) {
      throw error;
    } else {
      if (dato >= promExigido) {
        resultado.textContent = "Aprobado";
        frase.textContent = `Tu promedio fue ${dato}`
      } else {
        resultado.textContent = "Reprobado";
        frase.textContent = `Tu promedio fue ${dato}`
      }
    }
  } catch (error) {
    console.log(error.mensaje);
  }
}

// función ppal:

btn.addEventListener("click", (e) => {

  e.preventDefault();

  let valorNota = +nota.value;
  let promedioMinimo = 7;

  comprobarDato(valorNota);

  let resultado = +((promedio(3, 8, 6, valorNota)).toFixed(1));
  console.log(resultado);

  verificarAprobacion(resultado, promedioMinimo);

  console.log(nota.value);

  modal.classList.add("show");
  modal.classList.toggle("closed");
});


closedModal.addEventListener("click", (e) => {
  modal.classList.add("closed");
})