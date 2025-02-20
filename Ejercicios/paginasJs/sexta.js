/* 
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

export const contarLetras = (texto) => {
  if (texto === undefined)
    return console.log("Ingresa un texto")
  if (typeof texto !== "string") {
    return console.log
      ("Dato incorrecto, ingresa texto")
  }

  texto = texto.toLowerCase()
  let vocales = 0;
  let consonantes = 0

  for (let letra of texto) {
    if (/[aeiouáéíóúü]/.test(letra)) {
      vocales++
    }
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
      consonantes++
    }
  }

  return console.log({
    texto,
    vocales,
    consonantes
  })
}


/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

export const nombreValido = (nombre) => {
  if (!nombre)
    return console.log("Ingresa un nombre");
  if (typeof nombre !== "string")
    return console.log("Dato incorrecto");

  let expReg = /^[A-Za-záÁÉéÍíÓóÚÚüÜ\s]+$/g.test(nombre)
  console.log(expReg)

  return (expReg)
    ? console.log("Nombre Válido")
    : console.log("Nombre Inválido")
}


/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

export const correoValido = (correo) => {
  if (!correo)
    return console.log("Ingresa un correo");
  if (typeof correo !== "string")
    return console.log("Dato incorrecto");

  let expReg = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i.test(correo)

  return (expReg)
    ? console.log("Correo Válido")
    : console.log("Correo Inválido")

}

