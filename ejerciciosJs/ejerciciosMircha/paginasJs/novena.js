/* 
27) 

1--- Programa una clase llamada Pelicula.

2--- la clase recibirá un objeto al momento de instanciarse 
con los siguentes datos: 
id de la película en IMDB, 
titulo, 
director, 
año de estreno, 
país o países de origen, 
géneros y 
calificación en IMBD.

3--- Valida que el id IMDB tenga 9 caracteres, 
los primeros 2 sean letras y los 7 restantes números.
Valida que el título no rebase los 100 caracteres.
Valida que el director no rebase los 50 caracteres.
Valida que el año de estreno sea un número entero 
de 4 dígitos.
Valida que el país o paises sea introducidos en 
forma de arreglo.
Valida que los géneros sean introducidos en forma
de arreglo.
Valida que los géneros introducidos esten dentro 
de los géneros aceptados.
Valida que la calificación sea un número entre 0 y 10 
pudiendo ser decimal de una posición.

4--- Crea un método estático que devuelva los géneros 
aceptados
Crea un método que devuelva toda la ficha técnica de
la película.

5--- Apartir de un arreglo con la información de 3 
películas genera 3 instancias de la clase de forma 
automatizada e imprime la ficha técnica de cada película.

Géneros Aceptados: Action, Adult, Adventure, Animation, 
Biography, Comedy, Crime, Documentary ,Drama, Family, 
Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, 
Sport, Talk-Show, Thriller, War, Western.
*/

export class Pelicula {
  constructor({ id, titulo, director, estreno, paises, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.paises = paises;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id)
  }
  // Validaciones:
  validarCadena(propiedad, valor) {
    if (!valor)
      return console.log
        (`${propiedad}"${valor}" está vacío`);
    if (typeof valor !== "string")
      return console.log
        (`${propiedad}"${valor}" no es un texto`);
    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.log
        (`${propiedad}"${valor}" demasiado largo`);
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB-id", id)) {
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
        return console.log(`${id} IMDB-id inválido`)
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo))
      this.validarLongitudCadena("Título", titulo, 100)
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50)
  }

}


const peliculaUno = new Pelicula({
  id: "tt6785432",
})


