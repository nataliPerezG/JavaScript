
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
// Declaración de variables: 

let resultadoRonda = "";
let randomComputerElection = "";

let resultadoAcumulado = {
  victorias: 0,
  derrotas: 0,
  empates: 0
}

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

  // Mostrar elección de la computadora:

  computerElection.textContent =
    randomComputerElection;

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
    resultadoAcumulado.victorias++
  } else if (resultadoRonda === "Empataste 🤔😐") {
    resultadoAcumulado.empates++
  } else {
    resultadoAcumulado.derrotas++
  }

  wins.textContent = resultadoAcumulado.victorias;
  losses.textContent = resultadoAcumulado.derrotas;
  ties.textContent = resultadoAcumulado.empates;

}



// Función principal:

function playGame(param) {

  // Mostrar eleeección del jugador:
  playerElection.textContent = param

  // Elección de la computadora:
  eleccionMaquina()


  /* Comparar elección del jugador con la elección 
  del jugador con la elección de la computadora:
  */
  compararResultados()

  // actualizar el resultado acumulado:

  actualizarResAcu()

}

// Botón Reinicio:





