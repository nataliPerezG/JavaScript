let carrito = document.getElementById("carrito");
let plantillaCarrito = document.getElementById("template-carrito");
let fragmento = document.createDocumentFragment();
let total = document.getElementById("total");
let planitlllaFooter = document.getElementById("template-footer");


document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-agregar")) {
    agregarAlCarrito(e)
    pintarCarrito(e)

  }
})

let arrayCarrito = []


let agregarAlCarrito = (e) => {

  console.log(e.target.dataset.nombre);

  let producto = {
    nombre: e.target.dataset.nombre,
    id: e.target.dataset.nombre,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  }

  //Recorre el array para saber si el producto está o no agregado
  let indice = arrayCarrito.findIndex(item => item.id === producto.id)
  console.log(indice)

  if (indice === -1) {
    arrayCarrito.push(producto)
  } else {
    arrayCarrito[indice].cantidad++
    arrayCarrito[indice].precio =
      arrayCarrito[indice].cantidad * producto.precio;
  }

}

let pintarCarrito = (e) => {

  let clone = plantillaCarrito.content.cloneNode(true)


}