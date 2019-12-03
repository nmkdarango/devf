class GranMaestro {
    constructor(materia, notas){
        this.materia = materia
        this.notas = notas
    };

    //get me permirte usas el metodo como un atributo
    get calcularPromedio(){
        let numeroNotas = this.notas.length;
        if(this.notas.length>0){
            let suma = 0;
            for(let i=0; i<numeroNotas;i++){
                suma += this.notas[i];
            }
            return (suma/numeroNotas).toFixed('2');
        }else{
            console.log('Por favor ingrese un arreglo de numeros con al menos una nota');
            return 0;
        }
       
    };
    
    pasarMateria(nota, trampa){
        if(trampa){
            return trampa(nota);
        }else{
            if(nota >= 3){
                return true;
            }
        }
        return false;
    }
}

module.exports = {GranMaestro};