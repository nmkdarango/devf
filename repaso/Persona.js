class Persona {
    constructor(nombre, apellido, edad, sexo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
    };
    comer(){
        return "ñam ñam";
    }
    correr(){
        return "go go!";
    }
}
let mauro = new Persona("Mauricio", "Vargas", 28, "M");
console.log(mauro);
module.exports = {Persona};