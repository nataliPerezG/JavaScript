
export const darkMode = (btn, classDark) => {
  const darkButton = document.querySelector(btn);
  const elements = document.querySelectorAll("[data-dark]");

  const dia = "☀️";
  const noche = "🌙";

  const night = () => {
    elements.forEach(el => {
      el.classList.add(classDark)
    })
    darkButton.textContent = dia;
    localStorage.setItem("tema", "oscuro")
  }

  const light = () => {
    elements.forEach(el => {
      el.classList.remove(classDark)
    })
    darkButton.textContent = noche;
    localStorage.setItem("tema", "claro")
  }

  document.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      if (darkButton.textContent === noche) {
        night()
      } else {
        light()
      }
    }
  })

  document.addEventListener("DOMContentLoaded", e => {
    if (localStorage.getItem("tema" === null)) {
      localStorage.setItem("tema", "claro")
    }
    if (localStorage.getItem("tema") === "claro") light();
    if (localStorage.getItem("tema") === "oscuro") night();
  })

}


