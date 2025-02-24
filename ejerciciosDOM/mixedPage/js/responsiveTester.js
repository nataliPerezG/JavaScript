
export const responsiveTester = (id) => {
  const form = document.getElementById("tester");
  let tester;

  form.addEventListener("submit", e => {
    e.preventDefault()

    tester = window.open
      (form.url.value,
        "tester",
        `innerWidth = ${form.ancho.value},
        innerHeight = ${form.alto.value}`)
  })

  const cerrar = form.cerrar;
  cerrar.addEventListener("click", e => {
    tester.close()
  })

}
