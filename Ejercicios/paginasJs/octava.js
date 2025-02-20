/* 
24) Programa una función que dado un arreglo de números 
devuelva un objeto con dos arreglos, el primero tendrá 
los numeros ordenados en forma ascendente y el segundo 
de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

export const ordenarArray = (array) => {

  if (!array)
    return console.log
      ("Ingresa un array de números");
  if (!(array instanceof Array))
    return console.log
      ("El valor no es un array")
  if (array.length === 0)
    return console.log
      ("El array está vacío");

  for (let num of array) {
    if (typeof num !== "number")
      return console.log
        (`El valor "${num}" no es un número`)
  }

  return console.log(
    {
      array,
      ascendente: array.map(num => num).sort(),
      descendente: array.map(num => num).sort((a, b) => b - a)
    }
  )

}


/*
25) Programa una función que dado un arreglo de 
elementos, elimine los duplicados, pe. miFuncion
(["x", 10, "x", 2, "10", 10, true, true]) devolverá 
["x", 10, 2, "10", true].*/

export const eliminarDuplicados = (array) => {

  if (!array)
    return console.log
      ("Ingresa un array de números");
  if (!(array instanceof Array))
    return console.log
      ("El valor no es un array")
  if (array.length === 0)
    return console.log
      ("El array está vacío");

  return console.log(
    {
      array,
      sindDuplicado: array.filter((it, index, self) =>
        self.indexOf(it) === index),
    }
  )

}


/*
26) Programa una función que dado un arreglo de números 
obtenga el promedio, pe. 
promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
export const promedio = (array) => {

  if (!array)
    return console.log
      ("Ingresa un array de números");
  if (!(array instanceof Array))
    return console.log
      ("El valor no es un array")
  if (array.length === 0)
    return console.log
      ("El array está vacío");

  for (let num of array) {
    if (typeof num !== "number")
      return console.log
        (`El valor "${num}" no es un número`)
  }

  let suma = array.reduce((ac, current) => (ac + current))
  return console.log
    (suma / array.length)

}

