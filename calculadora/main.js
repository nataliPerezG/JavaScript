
const valorPatalla = document.getElementById("pantalla");

const agregar = valor => {
  valorPatalla.value += valor;
}

const borrar = () => {
  valorPatalla.value = "";
}

const igual = () => {
  const operacion = valorPatalla.value;
  const resultado = eval(operacion);
  valorPatalla.value = resultado;
}