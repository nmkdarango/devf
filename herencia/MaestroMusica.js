const {Maestro} = require('./Maestro');

class MaestroMusica extends Maestro{
    constructor(materia,notas, edad){
        super(materia, notas);
        this.materia = materia
        this.edad = edad
    };
}
let javier = new MaestroMusica("Musica",[3,4,3,3],34);
console.log(javier);
console.log(javier.calcularPromedio);