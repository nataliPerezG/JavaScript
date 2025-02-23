
export const reloj = (reloj, act, desact) => {

  const rel = document.querySelector(reloj);
  const actReloj = document.querySelector(act);
  const desactReloj = document.querySelector(desact);
  let hora;

  actReloj.addEventListener("click", e => {
    hora = setInterval(() => {
      let hour = new Date().toLocaleTimeString();
      rel.textContent = hour.toUpperCase();
    }, 1000);
    actReloj.disabled = true;
  })

  desactReloj.addEventListener("click", e => {
    clearInterval(hora);
    rel.textContent = null;
    actReloj.disabled = false
  })

}

export const alarma = (sound, btnStart, btnStop) => {

  let sonido = document.querySelector(sound);
  const btnAlarma = document.querySelector(btnStart);
  const btnParar = document.querySelector(btnStop);

  let sonar
  btnAlarma.addEventListener("click", e => {
    sonar = setInterval(() => {
      sonido.play()
    }, 1000)
    btnAlarma.disabled = true;
  })

  btnParar.addEventListener("click", e => {
    sonido.pause()
    // Para que el sonido reinicie:
    sonido.currentTime = 0;

    clearInterval(sonar);
    btnAlarma.disabled = false;
  })

}

