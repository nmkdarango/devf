//No usado, SMTP estará dentro de modules/User.js

const mongoose = require("mongoose");

//Schema, es mi plantilla
const SMTPSchema = new mongoose.Schema({
    host:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    port:{
        type:Number,
        default: 465
    },
    secure: {
        type: String,
        default: "ssl"
    },
    active: {
        type: Boolean,
        default: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    messages: {
        type:[{
            subject:{
                type: String,
                default: "Sin asunto",
                required: true
            },
            content: {
                type:String,
                required: true
            },
            isHtml: {
                type:Boolean,
                default:true
            },
            sended: {
                type:Boolean,
                default: false
            }
        }]
    }
},{
    timestamps:true
});
//Squima
const Smtp = mongoose.model("Smtp", SMTPSchema);

module.exports = {Smtp};