// Elementos desde html:
let plantCarrito =
  document.getElementById("template-carrito");
let frag =
  document.createDocumentFragment();
let carrito = document.getElementById("carrito");
let plantFooter =
  document.getElementById("template-footer");
let footer = document.getElementById("total");


//Array para añadir los productos al carrito
let arrayProductos = [];


//Delegación de eventos:
document.addEventListener("click", (e) => {
  if (e.target.className === "btn-agregar") {
    agregarProducto(e)
  }
  if (e.target.className === "agregar") {
    aumentar(e)
  }
  if (e.target.className === "eliminar") {
    eliminar(e)
  }
})

// Funciones:
const agregarProducto = (e) => {
  let producto = {
    nombre: e.target.dataset.nombre,
    precio: +(e.target.dataset.precio),
    cant: 1,
  }

  //verificar si el producto ya está en el array:
  let indice =
    arrayProductos.findIndex(item =>
      item.nombre === producto.nombre
    );

  if (indice === -1) {
    arrayProductos.push(producto)
  } else {
    arrayProductos[indice].cant++
  }
  pintarProductos()
}

const pintarProductos = () => {

  /*   Limpiar el contenido para que 
    no se repita en cada iteración: */
  carrito.textContent = "";

  arrayProductos.forEach((item) => {
    let clone = plantCarrito.content.cloneNode(true);
    clone.querySelector(".cant").textContent = item.cant;
    clone.querySelector(".nombre").textContent =
      item.nombre;
    clone.querySelector("span").textContent =
      item.precio * item.cant;

    //Obtener botones dinámicos;
    let agregar = clone.querySelector(".agregar");
    let eliminar = clone.querySelector(".eliminar");

    // Añadir un dataset para vincularlo con el producto
    agregar.dataset.id = item.nombre;
    eliminar.dataset.id = item.nombre;

    frag.appendChild(clone)
  })
  carrito.appendChild(frag);
  pintarFooter()
}

const pintarFooter = () => {

  footer.textContent = "";

  //Sumar los totales de cada producto:
  let totalCompra = arrayProductos.reduce(
    (acu, current) => acu + current.cant * current.precio, 0
  )
  let clone = plantFooter.content.cloneNode(true);
  clone.querySelector("span").textContent = totalCompra;

  if (totalCompra === 0) {
    clone.textContent = "";
  }

  footer.appendChild(clone)
}

const aumentar = (e) => {
  arrayProductos =
    arrayProductos.map((item) => {
      if (item.nombre === e.target.dataset.id) {
        item.cant++
      } return item
    })
  pintarProductos()
}

const eliminar = (e) => {
  arrayProductos = arrayProductos.filter(item => {
    if (item.nombre === e.target.dataset.id) {
      if (item.cant > 0) {
        item.cant--;
        if (item.cant === 0) return
      }
    } return item
  })
  pintarProductos()
}