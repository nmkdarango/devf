const { resolverSmtpCreate,resolverModifyPassword, resolverSmtpDelete} = require('./resolvers/smtpResolver');

module.exports = {
    smtpCreate:(req, res) =>{
        resolverSmtpCreate(req.parms.id, req.body).then((smtp) => {
            smtp.password = "******";
            res.status(201).send(smtp);
        }).catch((err) => {
            res.status(409).send(err);
        });
    },
    smtpModifyPassword:(req,res)=>{
        if(req.body.password){
            resolverModifyPassword(req.params.id, req.body.password).then(message=>{
                res.status(200).send(message);
            }).catch(error=>{
                res.status(404).send(error);
            });
        }else{
            res.status(500).send('No se envió el password');
        }
        
    },
    smtpDelete: (req,res) =>{
        resolverSmtpDelete(req.params.id).then(message=>{
            res.status(200).send(message);
        }).catch(error=>{
            res.status(404).send(error);
        });
    }

};