
import { showMenu } from "./js/buergerMenu.js";
import { reloj, alarma } from "./js/relojAlarma.js";

document.addEventListener("DOMContentLoaded", e => {
  showMenu(".hamburger", ".panel", "is-active", ".menu a");
  reloj("h4", ".act-reloj", ".desact-reloj");
  alarma(".alarma", ".act-alarma", ".desact-alarma");
})



