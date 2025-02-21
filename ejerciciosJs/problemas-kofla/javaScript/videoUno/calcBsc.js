
// Calculadora para operaciones básicas

export const calculadora = () => {

  let operacion = +prompt(`Qué operción deseas realizar?:
    1. Suma.
    2. Resta.
    3. Multiplicación.
    4. División`)


  console.log(operacion)
  if (operacion > 4 || operacion <= 0) {
    alert("Dato inesperado")
  } else {
    let numUno = +prompt("Ingresa el primer número");
    let numDos = +prompt("Ingresa el segundo número");

    let resultado;

    switch (operacion) {
      case 1:
        resultado = numUno + numDos
        break;
      case 2:
        resultado = numUno - numDos
        break;
      case 3:
        resultado = numUno * numDos
        break;
      case 4:
        resultado = numUno / numDos
        break;
      default:
        alert("Dato inesperado")
        break;
    }
    alert(`Tu resultado es ${resultado}`);
  }
}