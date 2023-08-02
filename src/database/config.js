const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "Jlpv00",
  database: "productdbgen",
  port: 5432,
  logging: false,
});

module.exports = { db };
