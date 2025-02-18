// Elementos desde el html
let container = document.getElementById("container")
let nombreC = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let btn = document.getElementById("btn")

// crear mensaje de exito o error
let divMensaje = document.createElement("div")
container.appendChild(divMensaje)


//función ppal:

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let error = validarcampos();
  mensaje(error)
})


// funciones:

const validarcampos = () => {
  let error = [];

  let nombre = nombreC.value;
  let materia = subject.value;
  let emailv = email.value;

  console.log("nombre: ", nombre)
  console.log("correo: ", emailv)
  console.log("materia: ", materia)

  if (nombre.length < 5 || nombre.length > 30) {
    error[0] = true;
    error[1] = "nombre inconrrecto";
    console.log(error)
    return error

  } else if (emailv.length < 5
    || emailv.length > 40
    || emailv.indexOf("@") === -1
    || emailv.indexOf(".") === -1) {
    error[0] = true;
    error[1] = "Correo inválido";
    console.log(error)
    return error

  } else if (materia.length < 5 || materia.length > 30) {
    error[0] = true;
    error[1] = "materia inconrrecto"
    console.log(error)
    return error
  }
  error[0] = false;
  return error
}

const mensaje = (error) => {
  if (error[0]) {
    divMensaje.innerText = error[1]
    divMensaje.classList.add("red")
  } else {
    divMensaje.textContent = "Solicitud enviada"
    divMensaje.classList.add("green");
    divMensaje.classList.remove("red");
  }

  if (divMensaje.textContent === "Solicitud enviada") {
    nombreC.value = "";
    email.value = "";
    subject.value = "";
  }
}



