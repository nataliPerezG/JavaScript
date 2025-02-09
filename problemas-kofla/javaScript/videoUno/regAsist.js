
let registroAlumnos = []

export const generarListado = (cant) => {
  cant = prompt("Cuántos Alumnos son?")
  let alumnos = 0

  while (alumnos < cant) {
    let nomb = prompt("Nombre");
    registroAlumnos.push({
      nombre: nomb,
      asit: 0,
      aus: 0,
      msj: "",
    })
    alumnos++
  }
}


export const pasarLista = (dias) => {

  for (let i = 0; i < dias; i++) {

    registroAlumnos.forEach(alumno => {
      let registro =
        prompt
          (`${alumno.nombre}: ¿presente o ausente?`);

      if (registro === "p") {
        alumno.asit += 1;
      } else if (registro === "a") {
        alumno.aus += 1;
      }

      if (alumno.aus > (dias * .3)) {
        alumno.msj = "Reprobaste por inasistencia";
      } else {
        alumno.msj = "Asistencias satisfactorias"
      }
    })
  }
  console.log(registroAlumnos);
}

