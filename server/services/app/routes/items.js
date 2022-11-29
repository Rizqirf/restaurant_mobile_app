const express = require(`express`);
const ControllerItem = require("../controllers/controllerItems");
const router = express.Router();

// define endpoint disini

router.get("/", ControllerItem.readItems);
router.post("/", ControllerItem.createItem);
router.get("/count", ControllerItem.countItems);
router.get("/:id", ControllerItem.readItemDetail);
router.put("/:id", ControllerItem.editItem);
router.delete("/:id", ControllerItem.deleteItem);

module.exports = router;
