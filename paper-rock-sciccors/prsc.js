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

    let election = "✊";
    if (number >= 0 && number < 1 / 3) {
      election = ""
    } else if (number >= 1 / 3 && number < 2 / 3) {
      election = "✋"
    } else {
      election = "✌️"
    }

    return election;

  }

  let machine = computerElection()

  let result = "";

  if (playerElection === "✊") {

    if (machine === "✊") {
      result = "empatado"
    } else if (machine === "✋") {
      result = "perdido"
    } else if (machine === "✌️") {
      result = "ganado!!!"
    }

  } else if (playerElection === "✋") {

    if (machine === "✊") {
      result = "ganado!!!"
    } else if (machine === "✋") {
      result = "empatado"
    } else if (machine === "✌️") {
      result = "perdido"
    }

  } else {

    if (machine === "✊") {
      result = "perdido"
    } else if (machine === "✋") {
      result = "ganado!!!"
    } else if (machine === "✌️") {
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


