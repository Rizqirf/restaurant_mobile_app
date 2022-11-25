const { comparePass } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models/index");

class ControllerUser {
  static async register(req, res, next) {
    try {
      const { email, password, address, phoneNumber } = req.body;
      if (!email || !password) throw { name: "bad_request" };
      const data = await User.create({
        email,
        password,
        address,
        phoneNumber,
        role: "admin",
      });
      res.status(201).json({ id: data.id, email: data.email });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      const data = await User.findOne({
        where: {
          email,
        },
      });
      if (!data) {
        throw { name: "invalid_credentials" };
      }
      const compared = comparePass(password, data.password);
      if (!compared) {
        throw { name: "invalid_credentials" };
      }
      const access_token = createToken({
        id: data.id,
        role: data.role,
      });

      res.status(200).json({
        access_token,
        email: data.email,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerUser;
