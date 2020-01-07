const express = require('express');

const router = express.Router();

const smtpController = require('../controllers/smtpController');
const userController = require('../controllers/userController');

router.post("/smtp/create/:id", smtpController.smtpCreate);
router.delete("/smtp/delete/:id", smtpController.smtpDelete);
router.put("/smtp/setPassword/:id", smtpController.smtpModifyPassword);

//Mi primer middleWare
const {validateToken} = require('../middleware/validations');



//Login
router.post("/user/login", userController.userLogin);
//Registro
router.post("/user/create", userController.userCreate);

//Si uso el middleware desde aquí todos los demas métodos deberán usar autenticación por token
//router.use(validateToken);

// Tambien existe otra manera de manejar el middleware, 
// y es mandarlo en el segundo parámetro

router.get("/user/getAll", validateToken, userController.userGetAll);

//Puedo usar un Array List para tener una lista de middlewares
router.get("/user/get/:id", [validateToken], userController.userGetAll);

module.exports = {router};
