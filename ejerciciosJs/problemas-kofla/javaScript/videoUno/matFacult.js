let materias = {
  mate: ["Sánchez", "Ana", "Pablo", "Luisa", "Miguel"],
  logica: ["Rodríguez", "Ana", "Aaron", "Sara", "Miguel"],
  fisica: ["Durán", "Andrés", "Pablo", "Luisa", "Manuel"],
  arte: ["Villegas", "Ana", "Santiago", "Luisa", "Alejandra"]
}


export function obtenerInfo(mat) {

  let dato;
  if (!materias[mat]) {
    console.log("Materia no encontrada")
    return
  } else {
    dato = materias[mat]
  }

  let profesor = dato[0];
  dato.shift()
  let alumnos = dato;

  console.log(`El profesor de ${mat} es ${profesor}
    y los alumnos son ${alumnos}
    `)

  return alumnos

}


export function mostrarClases(nombreAlumno) {

  let desconocido = 0

  for (let materia in materias) {

    let clases = materias[materia];
    let alumno = clases.includes(nombreAlumno);

    if (alumno) {
      console.log(`${nombreAlumno} se matriculó 
          en ${materia}.
          Profesor asignado: ${clases[0]}`)
    } else {
      desconocido += 1;
    }

    if (desconocido === 4) {
      console.log("Alumno Desconocido")
    }
  }
}

export function inscribirAlumno(clase, nombre) {

  let personas = materias[clase];
  if (personas.length >= 21) {
    console.log("Lo sentimos, el cupo está lleno")
  } else {
    personas.push(nombre);
    console.log(`
      felicidades ${nombre}, fuiste
      inscrito en ${clase}
      `)

    if (clase === "mate") {
      materias = {
        mate: personas,
        logica: ["Rodríguez", "Ana", "Aaron", "Sara", "Miguel"],
        fisica: ["Durán", "Andrés", "Pablo", "Luisa", "Manuel"],
        arte: ["Villegas", "Ana", "Santiago", "Luisa", "Alejandra"]
      }
    } else if (clase === "logica") {
      materias = {
        mate: ["Sánchez", "Ana", "Pablo", "Luisa", "Miguel"],
        logica: personas,
        fisica: ["Durán", "Andrés", "Pablo", "Luisa", "Manuel"],
        arte: ["Villegas", "Ana", "Santiago", "Luisa", "Alejandra"]
      }
    } else if (clase === "fisica") {

      materias = {
        mate: ["Sánchez", "Ana", "Pablo", "Luisa", "Miguel"],
        logica: ["Rodríguez", "Ana", "Aaron", "Sara", "Miguel"],
        fisica: personas,
        arte: ["Villegas", "Ana", "Santiago", "Luisa", "Alejandra"]
      }
    } else {
      materias = {
        mate: ["Sánchez", "Ana", "Pablo", "Luisa", "Miguel"],
        logica: ["Rodríguez", "Ana", "Aaron", "Sara", "Miguel"],
        fisica: ["Durán", "Andrés", "Pablo", "Luisa", "Manuel"],
        arte: personas
      }
    }
  }
  console.log(materias)
}

