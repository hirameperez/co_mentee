require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.json());

function containSubstring(str, substring) {
  if (!str || !substring) return false;
  return str.indexOf(substring) !== -1;
}

function validateUserTypeHeader(req, res, next) {
  let userTypeValue = req.headers["x-type-user"];

  if (!userTypeValue) {
    userTypeValue = req.query.header;
  }

  if (!userTypeValue) {
    return res.status(401).json({
      error: "Unauthotized",
      message: "Falta el header x-type-user o el parametro ?header=",
    });
  }

  if (!containSubstring(userTypeValue, "hyper")) {
    return res.status(401).json({
      error: "Unauthorized",
      message: "El header x-type.user debe contener hyper",
    });
  }

  next();
}

app.use(validateUserTypeHeader);

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido su peticion esta autorizada",
    header: req.headers["x-type-user"],
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
