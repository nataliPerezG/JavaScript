
/*
5) Programa una función que invierta las palabras de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá "odnuM aloH".*/


export let invertirLetras = (frase) => {

  if (!frase) {
    console.log("ingresa la frase para invertir las letras")
  } else if (typeof frase !== "string") {
    console.log("Dato incorrecto")
  } else {
    let reverse = frase.split("").reverse().join("")
    console.log(reverse)
  }

}

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

export let buscarPalabra = (parrafo = "", palabra = "") => {

  if (!parrafo) {
    return console.log("Ingrese un párrafo")
  } else if (typeof parrafo !== "string") {
    return console.log("dato incorrecto")
  }
  if (!palabra) {
    return console.log("Ingrese una palabra")
  } else if (typeof palabra !== "string") {
    return console.log("dato incorrecto")
  }

  let i = 0;
  let cont = 0;

  while (i !== -1) {

    i = parrafo.indexOf(palabra, i)
    if (i !== -1) {
      i++
      cont++
    }

  }

  return console.log(`la palabra "${palabra}" se repite ${cont} veces en el texto`)

}

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo(que se lee igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true.*/

export let palindroma = (palabra = "") => {

  if (!palabra) {
    return console.log("Ingrese una palabra o frase")
  } else if (typeof palabra !== "string") {
    return console.log("dato incorrecto")
  }

  let minus = palabra.toLowerCase();

  let palabraAlReves = minus.split("").reverse().join("")

  return (minus === palabraAlReves)
    ? console.log("Palíndormo")
    : console.log("No es palíndromo")

}

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

export let eliminarPatron = (texto = "", patron = "") => {

  if (!texto) {
    return console.log("Ingrese una palabra o frase")
  } else if (typeof texto !== "string") {
    return console.log("dato incorrecto")
  }
  if (!patron) {
    return console.log("Ingrese el patrón a eliminar")
  } else if (typeof patron !== "string") {
    return console.log("dato incorrecto")
  }

  let expresion = new RegExp(patron, "ig");

  let resultado = texto.replace(expresion, "")

  console.log(resultado);

}

