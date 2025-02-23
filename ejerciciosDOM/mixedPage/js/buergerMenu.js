
export const showMenu = (btn, menu, clase, enlace) => {

  document.addEventListener("click", e => {

    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      document.querySelector(menu).classList.toggle(clase)
      document.querySelector(btn).classList.toggle(clase)
    }

    if (e.target.matches(enlace)) {
      document.querySelector(menu).classList.remove(clase)
      document.querySelector(btn).classList.remove(clase)
    }

  })
}