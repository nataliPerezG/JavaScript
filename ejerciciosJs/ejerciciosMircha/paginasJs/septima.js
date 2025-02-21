/*
21) Programa una función que dado un array numérico
devuelve otro array con los números elevados al cuadrado, 
 pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25]. */

export const numeroAlCuadrado = (array) => {
  if (!array)
    return console.log
      ("Ingresa un array de números");
  if (!(array instanceof Array))
    return console.log
      ("El valor no es un array")
  if (array.length === 0)
    return console.log
      ("El array está vacío")

  for (let num of array) {
    if (typeof num !== "number")
      return console.log
        (`El valor "${num}" no es un número`)
  }

  let cuadrado = array.map(it => it * it)

  return console.log(cuadrado)
}


/*
22) Programa una función que dado un array devuelva 
el número mas alto y el más bajo de dicho array, 
pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60]. 
*/

export const mayorMenorOpcionUno = (array) => {
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

  let mayor = array[0];
  let menor = array[0];

  for (let num of array) {
    if (num > mayor) {
      mayor = num
    } else {
      mayor = mayor
    }
  }
  for (let num of array) {
    if (num < menor) {
      menor = num
    } else {
      menor = menor
    }
  }

  return console.log({
    mayor,
    menor,
  })
}


export const mayorMenorOpcionDos = (array) => {
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

  let maximo = Math.max(...array)
  let minimo = Math.min(...array)

  return console.log({
    maximo,
    minimo
  })
}


/*
23) Programa una función que dado un array de números 
devuelva un objeto con 2 arreglos en el primero 
almacena los números pares y en el segundo los impares, 
pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá 
{ pares: [2, 4, 6, 8, 0], impares: [1, 3, 5, 7, 9] }. */

export const paresImpares = (array) => {
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

  return console.log({
    pares: array.filter(item => item % 2 === 0),
    impares: array.filter(item => item % 2 === 1)
  })
}