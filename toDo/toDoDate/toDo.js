console.log("Mi Magno");

// Elementos del html:

let input = document.getElementById("input");
let boton = document.getElementById("btn");
let contLista = document.querySelector(".containerList");


// Variables:
let tareas = [
  /*   {
      name: "uno",
      date: "10-11-2025",
    },
    {
      name: "dos",
      date: "10-11-2025",
    }, */
];

// funciones:

const presionarEnter = (event) => {
  if (event.key === "Enter") {
    obtenerTarea()
  }
}

const mostrarTarea = () => {
  let contenido = "";
  for (let i = 0; i < tareas.length; i++) {

    let item = tareas[i]
    let { name, date } = item
    let parrafo = `
          <div class="list">
        <p>${name} <span> ${date} </span> </p>
        <button onclick="
            tareas.splice(${i},1)
            mostrarTarea()"
        >Borrar</button>
      </div>`
    contenido += parrafo;

  }

  contLista.innerHTML = contenido
}


const obtenerTarea = () => {

  let date = document.getElementById("date");
  name = input.value;
  date = date.value;

  tareas.push({
    name,
    date
  });
  input.value = "";
  input.focus();

  mostrarTarea();

}

