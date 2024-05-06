import "dotenv/config";

function verificarToken(req, res, next) {
  if (process.env.TOKEN === req.get("auth")) {
    next();
  } else {
    res
      .status(400)
      .send("No se encuentra autorizado para realizar la operación");
  }
}

export default verificarToken;
