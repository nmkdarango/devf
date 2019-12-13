const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Automaticamente me agrega el index
const { User } = require('./modules');

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello world");
});

//Es bueno poner nombres que hablen bien de lo que estamos creando
app.post("/api/v1/user/create", (req, res) => {
    //OHH!, se crean 3 variables de entorno inmediatamente con la información encontrada en req.body ej: req.body.name
    const { name, age, lastname, gender, is_active } = req.body;
    //Si los parámetros son iguales a los nombres, puedo ponerlos de la manera que vemos abajo
    const newUser = User({
        name,
        lastname,
        age,
        is_active,
        gender
    });
    newUser.save((error, user) => {
        error ? res.status(500).send("¡Hey, verifica los datos!") : res.status(201).send(user);
    })
})
app.get("/api/v1/user/get/:userid", (req, res) => {
    const id = req.params.userid;
    User.findById(id, (error, user) => {
        error ? res.status(404).send("¡No found man!") : res.status(200).send(user);
    });
});

app.get("/api/v1/user/get", (req, res) => {
    const id = req.params.userid;
    User.find({is_active:true},(error, users) => {
        error ? res.status(404).send("¡No found man!") : res.status(200).send(users);
    });
})

app.put("/api/v1/user/modify/:userid", (req, res) => {
    //Params, envío URL
    const id = req.params.userid;
    //Body, envìo por el body
    const { name, age, lastname, gender, is_active } = req.body;
    //Si los parámetros son iguales a los nombres, puedo ponerlos de la manera que vemos abajo
    const newData = {
        name,
        lastname,
        age,
        is_active,
        gender
    };
    //New true devuelve el nuevo, de resto me devolverà el viejo
    User.findByIdAndUpdate(id, { $set: newData }, { new: true }, (error, user) => {
        error ? res.status(404).send("¡No found man!") : res.status(200).send(user);
    });
});

app.delete('/api/v1/user/delete/:userid', (req,res)=>{
    const id = req.params.userid;
    User.findByIdAndUpdate(id, {$set:{is_active:false}},{new:true},(error,user)=>{
        error ? res.status(404).send(error) : res.status(200).send("Eliminado correctamente");
    })
});

app.patch('/api/v1/user/modify/name/:name', (req,res)=>{
    const name = req.params.name;
    User.findByIdAndUpdate(id, {$set:{name:name}},{new:true},(error,user)=>{
        error ? res.status(404).send(error) : res.status(200).send(user);
    })
});

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`App running correctly, port: ${PORT}`);
});



