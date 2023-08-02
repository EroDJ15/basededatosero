// Exportación de las funciones de los productos
const Product = require("../models/product.model");
exports.createProduct = async (req, res) => {
  try {
    const { name, ingredients, image, description, price, quantity } = req.body;
    const requestTime = req.requestTime;
    const product = await Product.create({
      name,
      ingredients,
      image,
      description,
      price,
      quantity,
    });
    res.status(201).json({
      requestTime,
      message: "Producto creado exitosamente",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "¡Algo salió muy mal!",
      error,
    });
  }
};
exports.findProducts = (req, res) => {
  const requestTime = req.requestTime;
  res.status(200).json({
    ok: true,
    requestTime,
    message: "Hola, es un producto",
  });
};
exports.findProduct = (req, res) => {
  const { id } = req.params;
  const requestTime = req.requestTime;
  res.status(200).json({
    requestTime,
    message: "Hola, es un producto",
    id,
  });
};
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const requestTime = req.requestTime;
  res.status(200).json({
    requestTime,
    message: "Producto actualizado exitosamente",
    id,
    product,
  });
};
exports.deleteProducts = (req, res) => {
  const { id } = req.params;
  const requestTime = req.requestTime;
  res.status(200).json({
    requestTime,
    message: "Producto eliminado exitosamente",
    id,
  });
};
