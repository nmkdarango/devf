/*

// ***Promesas***
// 1. Una promesa es una forma novedosa de tratar la asincronía de Javascript
// 2. Una promesa es "algo que está por llegar" y tiene dos opciones:
// espero una respuesta. Puedo recibir:
//     a. una respuesta satisfactoria
//     b. una respuesta negativa
Virus 20:46
// ***Promesas***
// 1. Una promesa es una forma novedosa de tratar la asincronía de Javascript
// 2. Una promesa es "algo que está por llegar" y tiene dos opciones:
// espero una respuesta. Puedo recibir:
//     a. una respuesta satisfactoria
//     b. una respuesta negativa
const request = require("request");
let urlPokeApi = "https://pokeapi.co/api/v2/pokemon/ditto/"
// si quiero extraer el resultado de la petición GET
// no lo puedo hacer debido a la asincronía de JS
// para eso usamos las promesas.
// estructura:
// new Promise( /* ejecutor  function(resolve, reject) { ... } );
// esta sería la estructura de una nueva promesa
// function nuevaPromesaA() {
//     return new Promise((resolve, reject) => {
// // el método CRUD que desee en mi función
//     })
// }
function nuevaPromesaA() {
        return new Promise((resolve, reject) => {
            request.get(urlPokeApi, (err, res, body) => {
                err
                ? reject(err)
                : resolve(JSON.parse(body).name)
            })
        })
    }
// nuevaPromesaA()
//     .then(lo que quiera hacer con mi respuesta resulta)
//     .catch(lo que quiera hacer con mi respuesta rechazada)
// vamos a decidir qué hacer con nuestra promesa cuando sea exitosa (.then) o
// qué hacer cuando sea rechazada (.catch)
nuevaPromesaA()
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))

//*/




const request = require('request');

let urlPokemon = "http://pokeapi.co/api/v2/pokemon";
let urlGoodReads = "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

//*


function nuevaPromesa(){
    return new Promise((resolve,reject)=>{
        request.get(urlPokemon+"/ditto/", (err,res,body)=>{
            err 
            ? reject(err)
            : resolve(JSON.parse(body).name);
            //console.log(this);
        });
    });
}

nuevaPromesa().then(resolve => console.log(resolve))
.catch(reject => console.log("falló"));



/**** Ejercicio ***
 * 
 * Hacer una petición a la pokeApi y retornar en una promesa: nombre, peso y una habilidad en el resultado de la promesa por medio de un .then y .catch
 *
 */

 function getHabilites(){
     return new Promise((resolve,reject)=>{
        request.get(urlPokemon+"/ditto/", (err,res,body)=>{
            console.log(res.statusMessage);
            res.statusMessage=="OK"?
            resolve({
                name: JSON.parse(body).name,
                peso: JSON.parse(body).weight,
                habilidad: JSON.parse(body).abilities
            })
            : reject(err)

        });
     })
 }
 getHabilites()
    .then((resolve)=>{
        console.log(resolve);
    })
    .catch((error)=>{
        console.log(error);
    });

    function postAuthor(){
        
        return new Promise((resolve,reject)=>{

            let data = {
                name: "Daniel",
                last_name: "Arango Trujillo",
                nacionalidad: "MX",
                biography: "(:))",
                gender: "M",
                age: 29,
                is_alive: false
            }

            request.post(urlGoodReads, {form: data}, (err,res,body)=>{

               res.statusMessage=="OK"
               ? resolve(body)
               : reject(err);
   
            });
        })
    }

    postAuthor().then(response=>{
        console.log(response)
    }).catch(error=>{
        console.log(error);
    });