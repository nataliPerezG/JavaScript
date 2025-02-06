console.log("creando rama nueva")

let eleccionJugador = document.getElementById("plyElection");
let eleccionMaquina = document.getElementById("compElection");
let resultadoJuego = document.getElementById("resultado");
let puntaje = document.getElementById("puntaje");


let score = JSON.parse(localStorage.getItem("score"))
  || {
  wins: 0,
  losses: 0,
  ties: 0
};

console.log(score)

function playGame(playerElection) {

  function computerElection() {

    let number = Math.random().toFixed(2);

    let election = "";
    if (number >= 0 && number < 1 / 3) {
      election = "piedra"
    } else if (number >= 1 / 3 && number < 2 / 3) {
      election = "papel"
    } else {
      election = "tijeras"
    }

    return election;

  }

  let machine = computerElection()

  let result = "";

  if (playerElection === "piedra") {

    if (machine === "piedra") {
      result = "empatado"
    } else if (machine === "papel") {
      result = "perdido"
    } else if (machine === "tijeras") {
      result = "ganado!!!"
    }

  } else if (playerElection === "papel") {

    if (machine === "piedra") {
      result = "ganado!!!"
    } else if (machine === "papel") {
      result = "empatado"
    } else if (machine === "tijeras") {
      result = "perdido"
    }

  } else {

    if (machine === "piedra") {
      result = "perdido"
    } else if (machine === "papel") {
      result = "ganado!!!"
    } else if (machine === "tijeras") {
      result = "empatado"
    }

  }

  if (result === "perdido") {
    score.losses += 1;
  } else if (result === "empatado") {
    score.ties += 1;
  } else if (result === "ganado!!!") {
    score.wins += 1;
  }


  localStorage.setItem("score", JSON.stringify(score))

  eleccionJugador.textContent = "Has elegido: " + playerElection;
  eleccionMaquina.textContent = "La computadora eligió " + machine;
  resultadoJuego.textContent = "Has " + result;
  puntaje.textContent =
    `Victorias: ${score.wins}. Derrotas: ${score.losses}. Empates: ${score.ties}`
};

function restart() {

  eleccionJugador.textContent = "---";
  eleccionMaquina.textContent = "---";
  resultadoJuego.textContent = "---";

  for (sc in score) {
    score[sc] = 0;
  }

  puntaje.textContent =
    `Victorias: ${score.wins} - Derrotas: ${score.losses} - Empates: ${score.ties}`

  localStorage.removeItem("score");
}


