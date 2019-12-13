const {User} = require('../../modules');

module.exports = {
    resolverSmtpCreate: (userId, smtpData) => {
        return new Promise((resolve, reject) =>  {

            User.update(
                userId, 
                { $push: smtpData}, 
                (error, user) => {
                    error ? reject(error) : resolve(smtp);
                }
            );
        
            
        });
    },
    resolverSmtpDelete: (userId, smtpId)=>{
        return new Promise((resolve, reject)=>{

            User.updateOne(
                {
                    _id:userId, 
                    "smtp._id":smtpId
                }, 
                {
                    $set:{
                        "smtp.$.active": false
                    }
                },
                (error, smtp)=>{
                    error ? reject(error) : resolve("El SMTP ('"+smtp.user+"') fue eliminado correctamente");
                }
            );
        });
    },
    resolverModifyPassword: (userId, smtpId, password)=>{
        return new Promise((resolve, reject)=>{
            User.updateOne(

                {
                    _id:userId, 
                    "smtp._id":smtpId
                }, 
                {
                    $set:{
                        "smtp.$.password": password
                    }
                },
                (error, smtp)=>{
                    error ? reject(error) : resolve("Actualización de contraseña");
                }

            );
        });
    }

}