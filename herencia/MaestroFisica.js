const {Maestro} = require('./Maestro');

class MaestroMusica extends Maestro{
    constructor(materia,notas,antiguedad){
        super(materia, notas);
        this.antiguedad = antiguedad;
    }
}
let diego = new MaestroMusica("Fisica Q",[4,4,4,4,3],5);
console.log(diego);
console.log(diego.calcularPromedio);