const { comparePass } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const User = require("../models/users");

class UserController {
  static async read(req, res, next) {
    try {
      const users = await User.read();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const users = await User.delete(id);
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
  static async create(req, res, next) {
    try {
      const { email, password, phoneNumber, address } = req.body;
      const user = await User.create({
        email,
        password,
        phoneNumber,
        address,
      });
      res.status(201).json({ id: user.id, email: user.email });
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res, next) {
    try {
      const { phoneNumber, address } = req.body;
      const users = await User.update({
        phoneNumber,
        address,
      });
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        throw { name: "invalid_credentials" };
      }
      const compared = comparePass(password, data.password);
      if (!compared) {
        throw { name: "invalid_credentials" };
      }
      const access_token = createToken({
        id: user.id,
        role: user.role,
      });

      res.status(200).json({
        access_token,
        email: user.email,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
