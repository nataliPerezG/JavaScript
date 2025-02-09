const materias = {
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