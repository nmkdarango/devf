const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;

//Schema, es mi plantilla
const userSchema = new mongoose.Schema({
    email:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    active:{
        type:Boolean,
        default:true
    },
    smtp:{
        type:[{
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
            }
        }]
    }
});

userSchema.pre("save", function(next) {
    let user = this;
    if (!user.isModified("password")) {
      return next();
    }
    //Genera el salt multiples veces (10), en caso de ser todo correcto, devuelvo salt
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  });

// Se crean métodos en el schema, en este caso se necesita comparar la contraseña
// next es un callback que permitirá devolver error o correcto, 
// el primer parámetro deberá ser nulo para que muestre correcto

userSchema.methods.comparePassword = function(candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return next(err);
      next(null, isMatch);
    });
  };


const User = mongoose.model("User", userSchema);

module.exports = {User};