
/* 
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

export const numeroAleatorio = (min = 500, max = 600) => {

  if (typeof min !== "number") {
    console.log("Ingresa un número")
  }

  let aleatorio = Math.round(Math.random(max - min) * max);

  console.log(aleatorio)
}


/*
10) Programa una función que reciba un número y evalúe si es capicúa o no(que se lee igual en un sentido que en otro), pe.miFuncion(2002) devolverá true.*/

export const capicua = (numero) => {

  if (typeof number !== "number") {
    return console.log("ingresa un número")
  }

  let texto = numero.toString();

  let reves = texto.split("").reverse().join("");

  if (texto === reves) {
    console.log("Número capicúa")
  } else {
    console.log("No hay coincidencia exacta")
  }

}


/*
11) Programa una función que calcule el factorial de un número(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.miFuncion(5) devolverá 120. */

export const factorial = (numero) => {

  let acu = 1;
  for (let i = 1; i <= numero; i++) {

    acu *= i;

  }

  console.log(acu)
}

