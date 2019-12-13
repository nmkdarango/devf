const {User} = require('../../modules');

const jwt = require("jsonwebtoken");
const KEY = "Darkering 001";

module.exports = {
    resolverUserGetAll: ()=>{
        return new Promise((resolve,reject) => {
            User.find({active:true},(error, users)=>{
                error ? reject(error) : resolve(users);
            });
        })
    },
    resolverUserCreate: userData => {
        return new Promise((resolve,reject)=>{
            const { email, password, name } = userData;

            const newUser = User({
                email,
                password,
                name
            });
        
            newUser.save((error, smtp) => {
                (error) ? reject(error) : resolve(smtp);
            });
        });
    },
    resolverUserGet: id => {
        return new Promise((resolve, reject)=>{
            User.findById(id,(error,user)=>{
                (error)?reject(error):resolve(user);
            })
        });
    },
    //****************************************************** */
    //Necesita los siguientes resolver para la autenticación
    //****************************************************** */


    //devolvemos el usuario, porque queremos seguir trabajando con el
    resolverUserFindByEmail: email => {
        return new Promise((resolve, reject) =>{
            User.findOne({email:email}, (error,user) => {
                (error)?reject(error):resolve(user);
            });
        });
    },
    //Se utiliza un user completo para ingresar el usuario, 
    //devolvemos el usuario, porque queremos seguir trabajando con el
    resolverUserValidatePassword: (user,password) => {
        return new Promise((resolve, reject)=>{
            user.comparePassword(password, (error, isMatch)=>{
                if(!isMatch){
                    reject("Usuario o contraseña incorrecta");
                }else{
                    (error)?reject(error):resolve(user);
                }
                
            });
        });
    },
    //El payload son los datos que se envian por el token
    resolverGenerateToken: user => {
        const userPayload = {
            id: user._id,
            email: user.email,
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 * 1000
        }

         return jwt.sign(userPayload, KEY);
    }

};