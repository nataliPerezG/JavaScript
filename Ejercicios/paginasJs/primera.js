
/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

export const contarCaracteres = (variable) => {

  (typeof variable !== "string")
    ? console.log("Envía un string")
    : console.log(`la frase "${variable}" tiene ${variable.length} caracteres`)

}

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

export const recortarFrase = (texto = "", caracteres = undefined) => {

  (!texto)
    ? console.log("Envía un string")
    : (caracteres === undefined)
      ? console.log("ingresa el número de caracteres a recortar")
      : console.log(texto.slice(0, caracteres))

}

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

export const fraseArray = (frase = "", separador = undefined) => {

  (!frase)
    ? console.log("Envía una frase")
    : (separador === undefined)
      ? console.log("Ingresa también la forma en que quieres separar el texto")
      : console.log(frase.split(separador))

}

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

export const repetirTexto = (texto = "", cantidad = undefined) => {


  (!texto)
    ? console.log("Envía una frase")
    : (cantidad === undefined)
      ? console.log("Cuántas veces deseas repetir la frase?")
      : console.log(texto.repeat(cantidad))

}





