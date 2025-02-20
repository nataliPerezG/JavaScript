/* 
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe.miFuncion(100, 2) devolverá 4 base 10.*/

export const convertirBinarioDecimal =
  (numero = undefined, base = undefined) => {

    if (numero === undefined)
      return console.log
        ("Ingresa el número a convertir");
    if (typeof numero !== "number")
      return console.log
        ("Ingresa un número");
    if (base === undefined)
      return console.log
        ("Ingresa el número base");
    if (typeof base !== "number")
      return console.log
        (`El número ${base} no es un número`);

    if (base === 2) {
      let cambio = parseInt(numero, base)
      return console.log
        (`${numero} binario, es ${cambio} en decimal`)
    } else if (base === 10) {
      let cambio = numero.toString(2)
      return console.log
        (`${numero} decimal, es ${cambio} en binario`)
    } else {
      return console.log
        (`En número de base a convertir no es válido`)
    }

  }



/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe.miFuncion(1000, 20) devolverá 800. */

export const aplicarDescuento =
  (valor = undefined, dcto = undefined) => {

    if (valor === undefined
      || typeof valor !== "number") {
      return console.log
        (`Ingresa la cantidad en número`)
    }
    if (dcto === undefined
      || typeof dcto !== "number") {
      return console.log
        (`Ingresa el descuento en número`)
    }

    if (dcto <= 0
      || valor <= 0) {
      return console.log
        (`El valor no puede ser cero o negativo`)
    }

    dcto = dcto / 100;
    let res = valor - (valor * dcto)
    return console.log
      (`El valor a pagar es ${res}`)

  }



/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe.miFuncion(new Date(1984, 4, 23)) devolverá 35 años(en 2020). */


export const aniosTranscurridos = (fecha = undefined) => {

  if (fecha === undefined) {
    return console.log
      ("Ingresa una fecha")
  }

  if (!(fecha instanceof Date)) {
    console.log(fecha)
    return console.log
      ("ingresa un formato de fecha válido");
  }

  const fechaActual = new Date().getTime()
  const fechaSolicitada = fecha.getTime();
  const msTranscurridos =
    fechaActual - fechaSolicitada;
  const msPorAnio = 1000 * 60 * 60 * 24 * 365;
  const tiempoEnAnios =
    Math.floor(msTranscurridos / msPorAnio);

  return (Math.sign(tiempoEnAnios) === 1)
    ? console.log
      (`Han pasado ${tiempoEnAnios} años desde esa fecha`)
    : (Math.sign(tiempoEnAnios) === -1)
      ? console.log
        (`Faltan ${Math.abs(tiempoEnAnios)} años para la fecha`)
      : console.log(`Es el año actual`)
}

