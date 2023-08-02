const express = require("express");
const morgan = require("morgan");
// ruta para router
const productRouter = require("./routes/products.route");
const app = express();
// Middleware para procesar JSON en las solicitudes
app.use(express.json());
app.use(morgan("dev"));

const getTimeRequest = (req, res, next) => {
  const date = new Date();
  const time = date.getTime();

  req.requestTime = date;

  console.log(date);
  console.log(time);
  next();
};

app.use(getTimeRequest);
app.use("/api/v1/products/", productRouter);
// Inicio del servidor en el puerto 3000

module.exports = app;
