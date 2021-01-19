const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 8080;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
