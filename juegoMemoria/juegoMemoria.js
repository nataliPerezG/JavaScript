
// Declaración de variables:
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimiento = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempoInicial = 30
let cuentaRegresiva = null;

// obtener elementos del html:

let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");

//Generación de números aleatorios:
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
//Organiza el array de forma aleatoria:
numeros = numeros.sort(() => Math.random() - 0.5);


// declaración de funciones:

function contarTiempo() {

  cuentaRegresiva = setInterval(() => {
    timer--;
    mostrarTiempo.innerHTML = `Tiempo restante: ${timer} sgs`;

    if (timer === 0) {
      clearInterval(cuentaRegresiva);
      bloquearTarjetas();
      mostrarTiempo.innerHTML = `Se acabó el tiempo...😥😣`;
    }

  }, 1000)

}

function bloquearTarjetas() {

  for (i = 0; i <= 15; i++) {
    let tarjetaBloqueada = document.getElementById(i);
    tarjetaBloqueada.innerHTML = numeros[i];
    tarjetaBloqueada.disabled = true;
  }

}


// función principal:

function descubrir(id) {

  //Iniciar el conteo regresivo:
  if (temporizador === false) {
    contarTiempo()
    temporizador = true;
  }

  //Aumentar núm de tarjetas destapadas
  tarjetasDestapadas++

  if (tarjetasDestapadas === 1) {

    //Mostrar núm destapado
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.textContent = primerResultado;

    //Deshabilitar el botón:
    tarjeta1.disabled = true;

  } else if (tarjetasDestapadas === 2) {

    //Mostrar núm destapado
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.textContent = segundoResultado;

    //Deshabilitar el botón:
    tarjeta2.disabled = true;

    //Aumentar movimientos:
    movimiento++

    //Mostrar movimientos en el html:
    mostrarMovimientos.innerHTML = `Movimientos: ${movimiento}`

    if (primerResultado === segundoResultado) {

      //Regresar a cero las tarjetas destapadas:
      tarjetasDestapadas = 0;

      //Aumentar aciertos
      aciertos++

      //Mostrar aciertos en el html:
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

      //Mostrar mensajes finales:
      if (aciertos === 8) {
        clearInterval(cuentaRegresiva);
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} ✨`;
        mostrarMovimientos.innerHTML = `Movimientos totales: ${movimiento} 🎉`;
        mostrarTiempo.innerHTML = `Fantástico, lo lograste en ${tiempoInicial - timer} segundos!!! 🔥`
      }

    } else {

      //Mostrar valores de las tarjetas momentáneamente y volver a ocultar:
      setTimeout(() => {
        tarjeta1.innerHTML = " ";
        tarjeta2.innerHTML = " ";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 750)

    }
  }
}

