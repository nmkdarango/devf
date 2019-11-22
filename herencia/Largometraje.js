class Largometraje{
    constructor(titulo, director, genero){
        this.titulo=titulo;
        this.director = director;
        this.genero = genero;
    };
    //getter
    get getterDescripcion(){
        let descripcion = this.titulo+" "+this.director+" "+this.genero;
        return descripcion;
    }
    
    descripcion(){
        let descripcion = this.titulo+" "+this.director+" "+this.genero;
        return descripcion;
    }
    reproducir(){

    }

}
module.exports = {Largometraje};



let pelicula = new Largometraje("Kill Bill", "Quentin Tarantino", "Acción + Blood");

console.log(pelicula);
console.log(pelicula.descripcion());