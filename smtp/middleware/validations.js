const jwt = require("jsonwebtoken");
const KEY = "Darkering 001";

module.exports = {
    validateToken: (req, res, next) => {
        const isToken = req.headers.authorization;
        if (isToken) {
          if (isToken.startsWith("smtpapp ")) {
            const token = isToken.slice(8, isToken.length);
            jwt.verify(token, KEY, (err, decode) => {
              if (err) {
                res.status(403).send(err);
              } else {
                req.decode = decode;
                next();
              }
            });
          } else {
            res.status(403).send({ message: "Sufijo incorrecto" });
          }
        } else {
          res.status(403).send({ message: "Necesitas un token para entrar" });
        }
      },
}
