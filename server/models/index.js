require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.dialect,
  }
);
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.image = (sequelize, Sequelize) => {
  return sequelize.define("image", {
    image: { type: Sequelize.STRING },
  });
};
module.exports = db;
