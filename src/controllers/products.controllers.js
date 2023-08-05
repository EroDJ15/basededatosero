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
exports.findProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        status: true,
      },
    });

    return res.status(200).json({
      status: "success",
      message: "¡Productos obtenidos exitosamente!",
      result: products.length,
      products,
    });
  } catch (eror) {
    console.log("Error al obtener los datos de la base de datos");
    return res.status(500).json({
      status: "fail",
      message: "¡Algo salió muy mal!",
      error,
    });
  }
};
exports.findProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: `¡Producto con id${id} no encontrado!`,
      });
    }
    return res.status(200).json({
      status: "success",
      message: "¡Producto obtenido exitosamente!",
      product,
    });
  } catch (error) {
    console.log("Error al obtener los datos de la base de datos");
    return res.status(500).json({
      status: "fail",
      message: "¡Algo salió muy mal!",
      error,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, price, isNew } = req.body;
    const requestTime = req.requestTime;
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: `¡Producto con id${id} no encontrado!`,
      });
    }
    const productUpdated = await product.update({
      quantity,
      price,
      isNew,
    });
    res.status(200).json({
      requestTime,
      message: "Producto actualizado exitosamente",
      productUpdated,
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      status: "fail",
      message: "¡Algo salió muy mal!",
      error,
    });
  }
};
exports.deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const requestTime = req.requestTime;
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "No se encontró ningún producto con el ID proporcionado",
      });
    }
    await product.destroy();
    res.status(200).json({
      requestTime,
      message: "Producto eliminado exitosamente",
      id,
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
