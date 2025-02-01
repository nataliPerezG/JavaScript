
// Declaración de variables

let idCounter = 0;


// Variables obtenidas del html:
let container = document.getElementById("container");
let task = document.getElementById("taskUser");
let stats = document.querySelector(".stats")


// funciones:
submit.addEventListener("click", (event) => {
  event.preventDefault();
  addTask()
})

const addTask = () => {
  idCounter++
  container.innerHTML += `
  <div id="${idCounter}" class="task">
        <div>
          <label>
            <input id="check" type="checkbox">
            ${task.value}
          </label>
        </div>
        <img class="icon" src="../../../html-css/assets/icons/png/cubo-de-basura.png">
        </div>
        `
  task.value = " ";
  updateStatus()
}


container.addEventListener("click", (event) => {
  if (event.target.nodeName === "LABEL" || event.target.nodeName === "INPUT") {
    updateStatus()
  } else if (event.target.nodeName === "IMG") {
    deleteTask(event.target.parentNode.id)
  }
})


const updateStatus = () => {
  let elements = container.querySelectorAll(".task").length;
  let check = container.querySelectorAll("input[type=checkbox]:checked").length;
  stats.innerHTML = `
        <p class="p-stats">Tareas pendientes: ${elements}</p>
      <p class="p-stats">Tareas completadas: ${check}</p>
  `
}

const deleteTask = (id) => {
  let deletask = document.getElementById(id);
  container.removeChild(deletask)
  updateStatus();

}

