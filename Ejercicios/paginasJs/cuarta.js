/* 
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

export const comprobarPrimo = (numero = undefined) => {

  if (numero === undefined)
    return console.log("No ingresaste datos");
  if (typeof numero !== "number")
    return console.log("Solo se admiten números");
  if (numero <= 1)
    return console.log("El número no puede ser '1', '0' o negativo")


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

  if (numero === undefined)
    return console.log("No ingresaste un número");
  if (typeof numero !== "number")
    return console.log("Solo se admiten números");

  (numero % 2 === 0)
    ? console.log("Número par")
    : console.log("Número impar")

}

/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

export const convertirGrados = (grados = undefined, medida = "") => {

  if (grados === undefined)
    return console.log("Ingresa los grados");
  if (typeof grados !== "number")
    return console.log
      ("Ingresa el NUMERO de grados");
  if (typeof medida !== "string")
    return console.log("Medida de grados no válida")

  if (medida.length !== 1 || !/(C|F)/i.test(medida))
    return console.log("Ingresa 'c' o 'f' según corresponda")

  const mayus = medida.toUpperCase();

  if (mayus === "C") {
    const resp = (grados * 9 / 5) + 32
    const fahrenheit = Math.round(resp)
    console.log
      (` ${grados} grados Celsius son
      ${fahrenheit} grados fahrenheit`)
  }

  if (mayus === "F") {
    const resp = (grados - 32) * 5 / 9;
    const celsius = Math.round(resp)
    console.log(` ${grados} grados fahrenheit son
      ${celsius} grados Celsius`)
  }

}



