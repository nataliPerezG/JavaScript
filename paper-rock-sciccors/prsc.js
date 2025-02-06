
// Elementos desde html:

let computerElection =
  document.getElementById("computerElection");
let playerElection =
  document.getElementById("playerElection");
let rsRonda =
  document.getElementById("rs-ronda")
let wins =
  document.getElementById("wins");
let losses =
  document.getElementById("losses");
let ties =
  document.getElementById("ties");
let auto =
  document.querySelector(".autoPlay");



// Declaración de variables: 

let resultadoRonda = "";
let randomComputerElection = "";
let isAutoPlaying = false;
let interval;


// Guardando en localStorage:

let score = JSON.parse(localStorage.getItem("score"))
  || {
  victorias: 0,
  derrotas: 0,
  empates: 0
};

// Funciones adicionales:

const eleccionMaquina = () => {

  let randomNumber = Math.random().toFixed(2);

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    randomComputerElection = "✊";
  } else if
    (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    randomComputerElection = "✋";
  } else {
    randomComputerElection = "✌️";
  }
  return randomComputerElection

}


const compararResultados = () => {

  if (playerElection.textContent === "✊") {
    if (randomComputerElection === "✊") {
      resultadoRonda = "Empataste 🤔😐";
    } else if (randomComputerElection === "✋") {
      resultadoRonda = "Perdiste...😭😣";
    } else if (randomComputerElection === "✌️") {
      resultadoRonda = "Ganaste!!! 🥳🎉";
    }

  } else if (playerElection.textContent === "✋") {
    if (randomComputerElection === "✊") {
      resultadoRonda = "Ganaste!!! 🥳🎉";
    } else if (randomComputerElection === "✋") {
      resultadoRonda = "Empataste 🤔😐";
    } else if (randomComputerElection === "✌️") {
      resultadoRonda = "Perdiste...😭😣";
    }
  } else if (playerElection.textContent === "✌️") {
    if (randomComputerElection === "✊") {
      resultadoRonda = "Perdiste...😭😣";
    } else if (randomComputerElection === "✋") {
      resultadoRonda = "Ganaste!!! 🥳🎉";
    } else if (randomComputerElection === "✌️") {
      resultadoRonda = "Empataste 🤔😐";
    }
  }

  // Mostrar el resutado de la ronda
  rsRonda.textContent = resultadoRonda;
}

const actualizarResAcu = () => {

  if (resultadoRonda === "Ganaste!!! 🥳🎉") {
    score.victorias += 1;
  } else if (resultadoRonda === "Empataste 🤔😐") {
    score.empates += 1;
  } else {
    score.derrotas += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  wins.textContent = score.victorias;
  losses.textContent = score.derrotas;
  ties.textContent = score.empates;

}

// Botón AutoPlay

function autoPlay() {

  if (!isAutoPlaying) {
    interval = setInterval(() => {
      const jugador = eleccionMaquina()
      playGame(jugador)
    }, 1000)
    isAutoPlaying = true;
    auto.textContent = "Detener";
  } else {
    clearInterval(interval);
    isAutoPlaying = false;
    auto.textContent = "AutoPlay";
  }

}


// Función principal:

function playGame(param) {

  // Mostrar eleeección del jugador:
  playerElection.textContent = param

  // Elección de la computadora:
  eleccionMaquina()

  // Mostrar elección de la computadora:

  computerElection.textContent =
    randomComputerElection;

  /* Comparar elección del jugador con la elección 
  del jugador con la elección de la computadora:
  */
  compararResultados()

  // actualizar el resultado acumulado:

  actualizarResAcu()

}

// Botón Reinicio:

function restart() {

  for (res in score) {
    score[res] = 0;
  }

  wins.textContent = score.victorias;
  losses.textContent = score.derrotas;
  ties.textContent = score.empates;

  localStorage.removeItem("score");

}










