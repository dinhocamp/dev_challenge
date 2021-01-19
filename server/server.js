const express = require("express");
const cors = require("cors");
const db = require("./models/index");
require("dotenv").config();
const app = express();
const port = process.env.port;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/images.routes")(app);
db.sequelize
  .sync()
  .then(() => {
    console.log("inside db");
  })
  .catch((err) => {
    console.log("error from db connection ", err);
  });
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
