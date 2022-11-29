const express = require(`express`);
const router = express.Router();

const itemRoutes = require("./items");
const categoryRoutes = require("./category");

router.get("/", (req, res) => {
  res.send("masuk");
});

router.use("/items", itemRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
