if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { mongoConnect } = require("./db/config");
const app = express();
const port = 4001;

const userRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("masuk");
});
app.use("/users", userRoutes);

mongoConnect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
