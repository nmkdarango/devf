const express = require("express");

const app = express();

//middlewares

//Recibe más tipos de media
app.use(express.urlencoded({extended:true}));

//Interpreta la información en json
app.use(express.json());

app.listen(1818, ()=> console.log("Server en puerto 1818"));

let PORT = 1819; 
app.listen(PORT, ()=> console.log("Server en puerto  "+PORT));

let PORT2 = 1820;
app.listen(PORT2, ()=> console.log(`Server en puerto  ${PORT2}`));

app.get("/api/v1", (request,response) => {
    response.send("Server listening");
});

app.get("/", (request,response) => {
    response.send("Todo funcionando correctamente!!");
});

app.get("/api/v1/:name", (request,response)=>{
    console.log(request);
    response.send(`Hola ${request.params.name}`);
});

app.post("/api/v1/:name", (request,response)=>{
    console.log(request.body);
    response.send(`Hola ${request.params.name} ${request.body.lastname}`);
});

//ejercicio
// Crear un CRUD (cualquier método) que reciba en el body por parte del cliente los siguiente parámetros
// nombre
// telèfono
// direccion
// edad
// gènero
// Calular el nùmero de segundos, minutos, horas, dias y años que ha vivido esa persona hasta el
// momento y retornar al cliente un mensaje de bienvenida que lo salude por el nombre completo y
// apellido y le diga cuanto tiempo ha vivido hasta el momento y cuànto le queda
// si el mundo se acabara en el 6 se septiembre del 2025
let users = [];
app.post("/api/v2/user", (request,response)=>{
    users.push(request.body);
    response.send(JSON.stringify(request.body));
});
app.get("/api/v2/user", (request,response)=>{
    response.send(JSON.stringify(users));
});
app.get("/api/v2/user/calculateDeath/:endWorld",(request,response)=>{
    console.log(request.params.endWorld);
    let organizeDate = request.params.endWorld.split('-').join('/');
    let end = new Date(request.params.endWorld+" 00:00");
    let secondsEnd = end.setSeconds(0)/1000;
    let secondsToday = new Date().setSeconds(0)/1000;
    let daysDiff = parseInt((secondsEnd-secondsToday)/60/60/24);

    response.send(`Tienes '${daysDiff}' dias de vida`);
});

app.get("/api/v2/user/calculateLifeTime",(request,response)=>{

    let sendResponse = "";
    if(users.length===0){
        response.send("No hay datos");
    }else{
        let end = new Date().getTime()/1000;
        for(i=0;i<users.length;i++){
            let secondsBirthday = new Date(users[i].fechaNacimiento+" 00:00").setSeconds(0)/1000;
            let secondsDiff = (end-secondsBirthday);
            sendResponse += users[i].nombre +" <br>";
            sendResponse += "Segundos: "+parseInt(secondsDiff);
            sendResponse += "Minutos: "+parseInt(secondsDiff/60);
            sendResponse += "Horas: "+parseInt(secondsDiff/3600);
            sendResponse += "Dias: "+parseInt(secondsDiff/3600/24);
            sendResponse += "Años: "+parseInt(secondsDiff/3600/24/365);
            sendResponse += "<br> ------------------------- <br>"
        }
        response.send(sendResponse);
    }
});

