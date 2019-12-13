const mongoose = require("mongoose");

//Schema, es mi plantilla
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    //Si solo se usa el tipo, de una vez se ingresa, sin un object
    age: Number,
    is_active:{
        type:Boolean,
        default: true
    },
    gender: {
        type: String,
        enum:["M","m","F","f","O","o"]
    }
//Otras opciones del esquema, timestamps me crea automaticamente create and modificated time
},{
    timestamps:true
});
//Squima
const User = mongoose.model("User", userSchema);

module.exports = {User};