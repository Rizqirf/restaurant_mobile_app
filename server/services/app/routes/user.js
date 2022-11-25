const express = require(`express`);
const ControllerUser = require("../controllers/controllerUsers");
const { authenticate } = require("../middlewares/authenticate");
const router = express.Router();

// define endpoint disini

router.post(`/login`, ControllerUser.login);
router.post(`/register`, authenticate, ControllerUser.register);

module.exports = router;
