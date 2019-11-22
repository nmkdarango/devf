class Compania {
    constructor(razonSocial, nit, cantidadEmpleados, direccion, anios){
        this.razonSocial = razonSocial
        this.nit = nit;
        this.cantidadEmpleados = cantidadEmpleados;
        this.direccion = direccion;
        this.anios = anios;
    }
    getCode(){
        return this.razonSocial+"?"+nit;
    }
    getNit(){
        return "El NIT de la empresa es: "+this.nit;
    }
    getExistencia(){
        return "La empresa existe desde hace: "+this.anios;
    }
}
let devf = new Compania("DEFV S.A.S","900110011",28,"Calle 50 S",10);
console.log(devf);