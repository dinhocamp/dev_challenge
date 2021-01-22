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
let fn = (sequelize, Sequelize) => {
  let images = sequelize.define("images", {
    images: { type: Sequelize.STRING },
    label: { type: Sequelize.STRING },
  });
  return images;
};
db.images = fn(sequelize, Sequelize);
module.exports = db;
