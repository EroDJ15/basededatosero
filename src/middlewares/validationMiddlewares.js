exports.validProduct = (req, res, next) => {
  const { name, price, categoryId } = req.body;

  if (!name || !price || categoryId === undefined || categoryId === null) {
    return res.status(400).json({
      status: "error",
      message: "El nombre, el precio y el categoryId son requeridos",
    });
  }

  // Si es necesario, puedes realizar más validaciones específicas para los campos "name", "price" y "categoryId" aquí.

  next();
};
