const {
    resolverUserCreate,
    resolverUserGet,
    resolverUserFindByEmail,
    resolverUserGetAll,
    resolverUserValidatePassword,
    resolverGenerateToken
} = require('./resolvers/userResolver');

module.exports = {
    userGet: (req,res) => {
        const id = req.params.id;
        //Hey, la promesa se trabaja con un then y catch, resolve y reject respectivamente
        resolverUserGet(id)
        .then(user=>{
            res.status(200).send(user);
        })
        .catch(error => {
            res.status(404).send(error);
        })
    },
    userGetAll:(req,res) =>{
        resolverUserGetAll()
        .then(users=>{
            res.status(200).send(users);
        })
        .catch(error => {
            res.status(500).send("No se logró consultar todos los usuarios");
        })
    },
    userCreate:(req,res) => {
        let data = req.body;
        resolverUserCreate(data)
        .then(user=>{
            res.status(201).send(user);
        })
        .catch(error=>{
            res.status(409).send(error);
        })
    },
    userLogin:(req,res) =>{
        const {email,password} = req.body;
        
        resolverUserFindByEmail(email).then(user=>{
            return resolverUserValidatePassword(user,password);
        })
        .then(user => {
            const token = resolverGenerateToken(user);
            res.status(200).send({user:user, token:token});
        })
        .catch(error =>{
            res.status(401).send(error);
        })
    }
};