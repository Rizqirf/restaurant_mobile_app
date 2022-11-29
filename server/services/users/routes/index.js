const express = require("express");
const UserController = require("../Controllers/userController");
const router = express.Router();

router.get("/", UserController.read);
router.post("/", UserController.create);
router.post("/login", UserController.login);
router.get("/:id", UserController.findOne);
router.delete("/:id", UserController.delete);

module.exports = router;
