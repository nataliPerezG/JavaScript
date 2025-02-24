
export const darkMode = (btn, classDark) => {
  const darkButton = document.querySelector(btn);
  const elements = document.querySelectorAll("[data-dark]");
  console.log(elements);

  const dia = "☀️";
  const noche = "🌙";

  document.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      if (darkButton.textContent === noche) {
        elements.forEach(el => {
          el.classList.add(classDark)
        })
        darkButton.textContent = dia;
      } else {
        elements.forEach(el => {
          el.classList.remove(classDark)
        })
        darkButton.textContent = noche;
      }
    }
  })

}