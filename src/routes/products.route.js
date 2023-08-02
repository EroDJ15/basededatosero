const express = require("express");
const productsControllers = require("./../controllers/products.controllers");
//Middlewares export
const validationMiddlewares = require("./../middlewares/validationMiddlewares.js");

const router = express.Router();

//Rutas limpias

router
  .route("/")
  .get(productsControllers.findProducts)
  .post(validationMiddlewares.validProduct, productsControllers.createProduct);

router
  .route("/:id")
  .get(productsControllers.findProduct)
  .patch(validationMiddlewares.validProduct, productsControllers.updateProduct)
  .delete(productsControllers.deleteProducts);

//--------------------------------------------------------------------------
// Rutas para buscar productos por ID y crear nuevos productos
//router.get("/", );
//router.post("/",);

module.exports = router;
