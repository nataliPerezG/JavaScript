import { validarPersona } from "./javaScript/videoUno/maqReg.js";
import { generarListado, pasarLista } from "./javaScript/videoUno/regAsist.js";
import { calculadora } from "./javaScript/videoUno/calcBsc.js";
import { Celular } from "./javaScript/videoUno/celular.js";


// Máquina de registro para ingresar:
/* validarPersona(23)
validarPersona(0) */

// Listado de Asistencia:
/* generarListado();
pasarLista(5) */

// Calculadora Básica:
/* calculadora() */


// Características de los celulares:
const celularUno = new Celular("negro", "300gr", "1200px", "12px", "16gb");
const celularDos = new Celular("rojo", "200gr", "1000px", "18px", "8gb");
const celularTres = new Celular("blanco", "100gr", "1500px", "20px", "20gb");

console.log(celularUno)
celularDos.encenderApagar()
celularDos.tomarFoto()
celularDos.grabarVideo()
celularTres.reiniciar()
celularTres.encenderApagar()
celularTres.reiniciar()
celularTres.mostrarinfo()










