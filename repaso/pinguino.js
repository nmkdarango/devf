/*
-----------------------------------------------------------------------
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
-----------------------------------------------------------------------
-----------------------------------------------------------------------
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
-----------------------------------------------------------------------
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------
-----------------------------------------------------------------------
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.
-----------------------------------------------------------------------
-----------------------------------------------------------------------
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.
-----------------------------------------------------------------------
*/


let myPenguin = {
    character:'Whiteblack',
    origin:'Tacky the Penguin',
    author:'Kugane Maruyama',
    notes: 'Satirical version of French history',
}; 
console.log("Hola, soy un pingüino y mi nombre es ["+myPenguin.character+"]");
myPenguin.poderVolar = false;
myPenguin.graznar=function(){
 
    return "kaww kaww!!";
}
console.log(myPenguin.graznar());
myPenguin.saludar = function(){
    return "Hola, soy un pingüino y mi nombre es ["+this.character+"]";
}
console.log(myPenguin.saludar());





