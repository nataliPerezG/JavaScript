
// Elementos desde el html
const form = document.querySelector("#form");
const input = document.querySelector(".input");
const button = document.querySelector(".button")
const lista = document.querySelector(".lista");
const template = document.querySelector("#template").content
const h4 = document.createElement("h4");

// Función ppal:
function modificarContenido(e) {
  e.preventDefault();
  agregarTarea();
  this.reset();
}


// Funciones:
function agregarTarea() {

  let tarea = input.value;
  const clone = template.cloneNode(true);
  let texto = clone.querySelector(".texto");
  let eliminar = clone.querySelector(".eliminar")
  texto.textContent = tarea;
  lista.prepend(clone);

  mostrarMensaje();
  addEvents(eliminar);

}


function mostrarMensaje() {

  (!lista.firstElementChild)
    ? h4.textContent = "SIN TAREAS"
    : h4.textContent = "TAREAS PENDIENTES";

  lista.before(h4)
}


function addEvents(elem) {

  elem.addEventListener("click", e => {
    let tarea = elem.parentElement;
    tarea.remove();
    mostrarMensaje()
  })

}


// Listener:

form.addEventListener("submit", modificarContenido);

mostrarMensaje();
