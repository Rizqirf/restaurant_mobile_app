const express = require(`express`);
const ControllerIngredients = require("../controllers/controllerIngredients");
const router = express.Router();

// define endpoint disini

router.get("/", ControllerIngredients.fetchIngredients);

module.exports = router;
