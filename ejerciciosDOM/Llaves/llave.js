// Elementos del html:

let container = document.getElementById("container-llaves")
let fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {

  let llave = document.createElement("div");
  llave.setAttribute("class", "cont-llave");

  let modeloAzar = Math.random().toString(36).substring(6, 12).toUpperCase();
  let precioAzar = Math.floor(Math.random() * (2000 - 1500) + 1500);

  llave.innerHTML = `
  <img src="llave.jpg" alt="llave">
  <div class="textos">
    <h3>Modelo:<br>
      <span class="modelo">${modeloAzar}</span>
    </h3>
    <p>Precio:<br>
      $<span class="precio">${precioAzar}</span></p>
  </div>
`
  llave.setAttribute("id", `${modeloAzar}`);

  fragmento.appendChild(llave)

  console.log(fragmento)
}

container.appendChild(fragmento);
// main.appendChild(container);



