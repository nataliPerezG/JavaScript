

//Número al azar:
let numeroCorrecto = Math.floor(Math.random() * 100) + 1;

// Declaración de variables:
let numeroIngresado = document.getElementById("pantalla");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos")
let intento = 3;

intentos.textContent = intento;


// Función:

const verificar = () => {

  let numeroUsuario = parseInt(numeroIngresado.value);

  intento--
  intentos.textContent = `Tienes ${intento} intentos`

  if (intento === 0 || numeroUsuario === numeroCorrecto) {
    numeroIngresado.disabled = true;
  }

  if (intento <= 0 || numeroUsuario === numeroCorrecto) {
    let fraseFinal = document.getElementById("final");
    intentos.textContent = "---"
  }

  if (numeroUsuario < 1 || numeroUsuario > 100 || isNaN(numeroUsuario)) {
    mensaje.textContent = "Por favor ingresa un número válido entre 1 y 100";
    mensaje.style.color = "black";
    return;
  }

  if (numeroUsuario < numeroCorrecto) {
    mensaje.textContent = "El número es mayor";
    mensaje.style.color = "purple";
  } else if (numeroUsuario > numeroCorrecto) {
    mensaje.textContent = "El número es menor"
    mensaje.style.color = "purple";
  } else {
    mensaje.textContent = "Felicidades, es el número correcto"
    mensaje.style.color = "green";
  }

};



