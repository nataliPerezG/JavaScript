
import { showMenu } from "./js/buergerMenu.js";
import { reloj, alarma } from "./js/relojAlarma.js";
import { moveBall } from "./js/moveBall.js";
import { conteoRegresivo } from "./js/conteoRegresivo.js";

document.addEventListener("DOMContentLoaded", e => {
  showMenu(".hamburger", ".panel", "is-active", ".menu a");
  reloj("h4", ".act-reloj", ".desact-reloj");
  alarma(".alarma", ".act-alarma", ".desact-alarma");
  conteoRegresivo("conteo", "Feb 23 2025 19:54:00", "Time Off")
})

document.addEventListener("keydown", e => {
  moveBall(e, ".stage", ".ball")
})



