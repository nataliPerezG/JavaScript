
let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");

console.log(hora)

let fechaActual = new Date();
let diaMes = fechaActual.getDate();
let diaSemama = fechaActual.getDay();
let mes = fechaActual.getMonth()
let anio = fechaActual.getFullYear()


let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

let fechaMostrar = `${diasSemana[diaSemama]} ${diaMes} de ${meses[mes]} del ${anio}`

fecha.textContent = fechaMostrar;



setInterval(() => {
  let hrs = new Date()
  let horaAct = hrs.getHours();
  if (horaAct < 10) { horaAct = "0" + horaAct }
  let minutos = hrs.getMinutes();
  if (minutos < 10) { minutos = "0" + minutos }
  let segundos = hrs.getSeconds();
  if (segundos < 10) { segundos = "0" + segundos }

  hora.textContent = `${horaAct}:${minutos}:${segundos}`
}, 1000);