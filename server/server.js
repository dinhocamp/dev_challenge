const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models/index");
require("dotenv").config();
const app = express();
const port = process.env.port;
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
db.sequelize
  .sync()
  .then(() => {
    console.log("inside db");
  })
  .catch((err) => {
    console.log("error from db connection ", err);
  });
require("./routes/images.routes")(app);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
