const app = require("./app");

const { db } = require("./database/config");
// conecta a la db
db.authenticate()
  .then(() => console.log("Database conectada..."))
  .catch((error) => console.log(error));

// sincroniza la db
db.sync()
  .then(() => console.log("Database sincronizada..."))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});
