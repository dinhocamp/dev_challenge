const db = require("../models/index");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
module.exports = (app) => {
  app.post("/", (req, res) => {
    console.log(req.body.files);
    cloudinary.uploader.upload(req.body.files, function (err, response) {
      if (err) {
        console.log(Object.keys(err), "10000");
        res.send({ msg: "error from cloud" });
      } else {
        console.log("response from cloud", response);
        res.send({ msg: "shit is sent" });
      }
    });
  });
  app.get("/", (req, res) => {
    res.send("hana");
  });
};
