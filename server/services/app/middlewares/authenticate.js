const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models/index");

const authenticate = async (req, res, next) => {
  try {
    let access_token = req.headers.access_token;

    if (!access_token) throw { name: "unauthorized" };

    let payload = verifyToken(access_token);
    let user = await User.findByPk(payload.id);
    if (!user) throw { name: "unauthorized" };
    req.user = {
      access_token,
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticate,
};
