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
        res.send({ msg: "error from cloud" });
      } else {
        console.log("response from cloud", response);
        console.log(db);
        db.images
          .create({ images: response.url, label: req.body.label })
          .then(() => {
            res.send({ msg: "shit is in db now" });
          })
          .catch((err) => {
            res.send({ msg: "shit is fucked from the db" });
          });
      }
    });
  });
  app.get("/", (req, res) => {
    db.images
      .findAll()
      .then((response) => {
        res.send(response);
      })
      .catch((err) => {
        console.log(err);
        console.log("errfrom db");
      });
  });
  app.post("/delete", (req, res) => {
    console.log(req.body);
    const arr = req.body.images.split("/");
    let c = arr[arr.length - 1].split(".")[0];
    cloudinary.uploader.destroy(c, function (err, response) {
      if (err) {
        console.log("err from cloudinary deleting shit");
      } else {
        console.log("shit is deleted on the cloud ");
        db.images
          .destroy({ where: req.body })
          .then(() => {
            res.send({ ms: "shit is deleted" });
          })
          .catch(() => {
            req.send("problem deleting");
            console.log("error deleting shit");
          });
      }
    });
  });
};
