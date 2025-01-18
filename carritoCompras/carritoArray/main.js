
let carrito = document.querySelector("#carrito");
let botones = document.querySelectorAll("button");
let template = document.querySelector("#template");
let fragmento = document.createDocumentFragment();

let carritoArray = []


let agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta);

  producto = {
    nombre: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  }

  let indice = carritoArray.findIndex(item =>
    item.id === producto.id)


  if (indice === -1) {
    carritoArray.push(producto)
  } else {
    carritoArray[indice].cantidad++
  }

  pintarCarrito(carritoArray);

}


let pintarCarrito = (array) => {

  carrito.textContent = ""

  array.forEach((item) => {
    let clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector("p").textContent = item.nombre;
    clone.querySelector(".cant").textContent = item.cantidad;
    fragmento.appendChild(clone)
  })

  carrito.appendChild(fragmento)

}

botones.forEach((btn) => {
  btn.addEventListener("click", agregarAlCarrito)
})


