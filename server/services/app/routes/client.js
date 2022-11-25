const express = require(`express`);
const ControllerCategory = require("../controllers/controllerCategories");
const ControllerItem = require("../controllers/controllerItems");
const router = express.Router();

// define endpoint disini

router.get("/items", ControllerItem.readItems);
router.get("/categories", ControllerCategory.readCategory);
router.get("/items/:id", ControllerItem.readItemDetail);

module.exports = router;
