
// Máquina de registro
/*
let paseGratis = true;

function validarPersona(hora) {

  edad = +prompt("¿Cuál es tu edad?");

  if (edad >= 18) {

    if (hora >= 2 && hora < 7 && paseGratis == true) {
      console.log(`Puedes pasar gratis, eres el primero después de las 2 a.m`)
      paseGratis = false;
    } else {

      console.log(`Son las ${hora}hr. Puedes pasar, pero debes pagar`)
    }

  } else {
    console.log(`No puedes pasar, eres menor de edad`)
  }
}

validarPersona(23)
validarPersona(0)
validarPersona(2)
validarPersona(4)
validarPersona(8)
*/

// Registro de asistencia
/*
//Listado de alumnos
let cantidadAlumnos = +prompt("Cuántos alumnos son?");

let alumnos = [];

for (let i = 0; i < cantidadAlumnos; i++) {
  alumnos[i] = [prompt("Nombre del alumno " + (i + 1)), 0]
}
console.log(alumnos);

//Pasar lista
let diasRegistrados = 15;

for (i = 0; i < diasRegistrados; i++) {
  for (alum of alumnos) {
    let asistencia = prompt(alum[0])
    if (asistencia == "p" || asistencia == "P") {
      alum[1]++
    }
  }
}

// Mostrar resultado por alumno:
for (alumno of alumnos) {
  let nombre = alumno[0];
  let asistencias = alumno[1];
  let ausencias = diasRegistrados - alumno[1]

  console.log(`Alumno: ${nombre};
    Asistencia: ${asistencias};
    Ausencias: ${ausencias}`)

  let treintaPorciento = (diasRegistrados * 10) / 100;

  if (ausencias > treintaPorciento) {
    console.log("Reprobado por inasistencias")

  } else {
    console.log("Asistencia satisfactorias")
  }
}
*/

// Calculadora para operaciones básicas
/*
let operacion = +prompt(`Qué operción deseas realizar?:
  1. Suma.
  2. Resta.
  3. Multiplicación.
  4. División`)

if (operacion > 4 || operacion <= 0) {
  alert("Dato inesperado")
} else {
  let numUno = +prompt("Ingresa el primer número");
  let numDos = +prompt("Ingresa el segundo número");

  let resultado;

  switch (operacion) {
    case 1:
      resultado = numUno + numDos
      break;
    case 2:
      resultado = numUno - numDos
      break;
    case 3:
      resultado = numUno * numDos
      break;
    case 4:
      resultado = numUno / numDos
      break;
    default:
      alert("Dato inesperado")
      break;
  }
  alert(`Tu resultado es ${resultado}`);
}
 */





