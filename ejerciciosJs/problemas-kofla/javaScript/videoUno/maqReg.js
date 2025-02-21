
let paseGratis = true;
let edad;

export function validarPersona(hora) {

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


