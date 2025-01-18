
let carrito = document.querySelector("#carrito");
let botones = document.querySelectorAll("button");
let fragmento = document.createDocumentFragment();
let plantilla = document.querySelector("#template")

const carritoObjeto = {}

const agregarAlCarrito = (e) => {

  const producto = {
    nombre: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  }

  if (carritoObjeto.hasOwnProperty(producto.nombre)) {
    producto.cantidad =
      carritoObjeto[producto.nombre].cantidad + 1;
  }

  carritoObjeto[producto.nombre] = producto

  pintarCarrito()
}

const pintarCarrito = () => {

  carrito.textContent = "";

  Object.values(carritoObjeto).forEach((item) => {
    let clone = plantilla.content.firstElementChild.cloneNode(true);
    clone.querySelector("p").textContent = item.nombre;
    clone.querySelector(".cant").textContent = item.cantidad;
    fragmento.appendChild(clone);
  })

  carrito.appendChild(fragmento);

}


botones.forEach((btn) => {
  btn.addEventListener("click", agregarAlCarrito)
})























