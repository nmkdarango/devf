const {GranMaestro} = require('./GranMaestro');

class MaestroFisica extends GranMaestro {
    
    constructor(materia,notas){
        super(materia,notas);
    };

    trampa(nota){
        if(nota>2.5){
            return true;
        }
        return false;
    }
}

let julian = new MaestroFisica("Fisica", [4,3,2,2]);
let promedio = julian.calcularPromedio;

console.log(julian);
console.log(promedio);
console.log(julian.pasarMateria(promedio, julian.trampa));
console.log(julian.pasarMateria(promedio));

