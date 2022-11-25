const express = require(`express`);
const ControllerCategory = require("../controllers/controllerCategories");
const router = express.Router();

// define endpoint disini

router.post(`/`, ControllerCategory.createCategory);
router.get(`/`, ControllerCategory.readCategory);
router.get("/count", ControllerCategory.countCategory);
router.put("/:id", ControllerCategory.updateCategory);
router.delete("/:id", ControllerCategory.deleteCategory);

module.exports = router;
