exports.validProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      status: "error",
      message: "El nombre y el precio son requeridos",
    });
  }
  next();
};
