const express = require(`express`);
const router = express.Router();

const itemRoutes = require("./items");
const categoryRoutes = require("./category");
const userRoutes = require("./user");
const clientRoutes = require("./client");
const ingredientRoutes = require("./ingredients");

const { authenticate } = require("../middlewares/authenticate");

router.get("/", (req, res) => {
  res.send("masuk");
});

router.use("/users", userRoutes);
router.use("/clients", clientRoutes);
router.use("/items", authenticate, itemRoutes);
router.use("/ingredients", authenticate, ingredientRoutes);
router.use("/categories", authenticate, categoryRoutes);

module.exports = router;
