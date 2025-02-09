
export class Celular {

  constructor(color, peso, rdp, cam, ram) {
    this.color = color;
    this.peso = peso;
    this.rdp = rdp;
    this.cam = cam;
    this.ram = ram;
    this.encendido = true
  }

  mostrarinfo() {
    console.log(
      `Color: ${this.color}.
      Peso: ${this.peso}.
      Resolución de pantalla: ${this.rdp}.
      Resolución de cámara: ${this.cam}.
      Memoria RAM: ${this.ram}`
    )
  }

  encenderApagar() {
    if (this.encendido == true) {
      console.log("Teléfono encendido");
      this.encendido = false
    } else {
      console.log("Teléfono apagado");
      this.encendido = true;
    }
  }

  reiniciar() {
    if (this.encendido == true) {
      console.log("Reiniciando celular")
    } else {
      console.log("Celular apagado")
    }
  }

  tomarFoto() {
    console.log("foto tomada en una resolución " + this.cam)
  }

  grabarVideo() {
    console.log("video grabado en una resolución " + this.cam)
  }

}