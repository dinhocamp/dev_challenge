const db = require("../models/index");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("ahlan");
  });
  app.post("/", (req, res) => {
    console.log(req.body);
    res.send("image recieved");
  });
};
