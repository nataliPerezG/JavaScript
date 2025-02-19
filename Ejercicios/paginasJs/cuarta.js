/* 
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

export const comprobarPrimo = (numero = undefined) => {

  if (numero === undefined) {
    return console.log("No ingresaste un número")
  }

  let acu = 0;

  for (let i = 1; i <= numero; i++) {

    if (numero % i === 0) {
      acu++
    }

  }

  (acu === 2)
    ? console.log("Número Primo")
    : console.log("No es primo")

}

/*
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/

export const parImpar = (numero) => {

  if (numero === undefined) {
    return console.log("No ingresaste un número")
  }

  (numero % 2 === 0)
    ? console.log("Número par")
    : console.log("Número impar")

}

/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

export const convertirGrados = (grados, medida) => {

  const mayus = medida.toUpperCase();
  if (mayus === "C") {
    const fahrenheit = (grados * 9 / 5) + 32
    console.log(` ${grados} grados Celsius son
      ${fahrenheit} grados fahrenheit`)
  }
  if (mayus === "F") {
    const resp = (grados - 32) * 5 / 9;
    const celsius = resp.toFixed(2)

    console.log(` ${grados} grados fahrenheit son
      ${celsius} grados fahrenheit`)
  }

}

