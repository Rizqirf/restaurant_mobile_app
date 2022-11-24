const express = require("express");
const { mongoConnect } = require("./db/config");
const app = express();
const port = 4000;
require("dotenv").config();
const userRoutes = require("./routes");

app.get("/", (req, res) => {
  res.send("masuk");
});
app.use("/users", userRoutes);

mongoConnect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
