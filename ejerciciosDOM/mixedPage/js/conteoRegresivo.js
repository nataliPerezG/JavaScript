
export const conteoRegresivo = (cont, date, ms) => {

  let fechaLimite = new Date(date).getTime();
  let cuentaReg = document.getElementById(cont)


  let regresivo = setInterval(() => {

    let fechaActual = new Date().getTime();
    let tiempoRestante = fechaLimite - fechaActual;

    let dias = Math.floor
      (tiempoRestante / (1000 * 60 * 60 * 24));
    let hrs = ("0" +
      Math.floor
        ((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2)
    let min = ("0" +
      Math.floor
        ((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
    let seg = ("0" +
      Math.floor
        ((tiempoRestante % (1000 * 60)) / 1000)).slice(-2)

    cuentaReg.textContent =
      `Faltan ${dias} días, ${hrs} horas, ${min} minutos y ${seg} segundos`

    if (tiempoRestante < 0) {
      clearInterval(regresivo);
      cuentaReg.textContent = ms;
    }

  }, 1000)

}