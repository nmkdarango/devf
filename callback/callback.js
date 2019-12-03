function miCallback(){
    return "hola";
}
console.log(miCallback());

function miFuncion(callback){
    let temp = callback();
    return temp;
}
console.log(miFuncion(miCallback));

// 1. Muestra un mensaje en la consola mediante un callback

function helloWorldCallback(){
    console.log("Hola mundo");
}

function anotherFunction(callback){
    callback();
}
anotherFunction(helloWorldCallback);

/*
// 2.- Crear una función de orden superior que reciba como
//     argumento un mensaje y callback. Según el callback que
//     se pase como argumento, la función de orden superior
//     debe mostrar el mensaje  en un console.log
*/

function ordenSuperior(message, callback){
    callback(message);
}
function miCallback2(messageParam){
    console.log(messageParam);
}
ordenSuperior("Mi mensaje", miCallback2);

// 3.- Crear una función de orden superior que reciba como
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

function operation(number1, number2, callback){
	return callback(number1, number2);
}
function add(number1, number2){
    let add = number1+number2; 
	return add;
}
function substract(number1, number2){
    let substract = number1-number2; 
	return substract;
}
function multiply(number1, number2){
    let multiply = number1*number2;
	return multiply;
}

console.log(operation(1,2,add));
console.log(operation(1,2,substract));
console.log(operation(1,2,multiply));



// 4.- Escribe una función de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELAGARTO

function setCase(str, callback){
    return callback(str);
}
function uppercase(str){
    let upper = str.toUpperCase();
    return upper;
}

function lowercase(str){
    let lower = str.toLowerCase();
    return lower;
}

console.log(setCase("PejeLagarto", uppercase));
console.log(setCase("PejeLagarto", lowercase));

// 5.- Hacer un arreglo de 4 cantidades de tiempo en minutos
//     EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas)
//     mediante un callback

function operationArrayList(array, callback){
    return callback(array);
}

function onlyMoreTwoHours(hours){
    let newHours = [];
    for(let i =0; i<hours.length;i++){
        if(hours[i] / 60 > 2){
            newHours.push((hours[i]/60).toFixed('2'));
        }
    }
    return newHours;
}
console.log(operationArrayList([120, 80, 200, 100],onlyMoreTwoHours));
