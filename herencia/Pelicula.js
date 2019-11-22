const {Largometraje} = require("./Largometraje");

class Pelicula extends Largometraje{
    constructor(titulo, director, genero, duracion){
        super(titulo,director,genero);
        this.duracion = duracion;
    }
}

module.exports = {Pelicula};

let kill = new Pelicula("Kill Bill", "Quentin Tarantino", "Acción + Blood",2);
console.log(kill.descripcion());
console.log(kill.getterDescripcion);