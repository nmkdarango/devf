const mongoose = require("mongoose");
//Atento = usuario:password y db1 = nombre de la base de datos
const DB_URL = "mongodb+srv://danielarango:8uZ8KF71tmNV3cSx@cluster0-ncoux.mongodb.net/bd1?retryWrites=true&w=majority";
const {User} = require("./User"); 
mongoose.connect(DB_URL, {useNewUrlParser:true, useUnifiedTopology:true}, error=>{
    error ? console.log(error) : console.log("DB Connection successfully");
});
//Es mejor traer todos los modelos aquí para solo incluir un archivo
module.exports = {
    User
};