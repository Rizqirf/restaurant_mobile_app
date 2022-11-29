const { comparePass } = require("../helpers/bcrypt");
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
      if (users.deletedCount) {
        res.status(200).json({ message: "Success delete user" });
      } else {
        throw { message: "User not found" };
      }
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
      console.log(user);
      res.status(201).json({ message: "Success create new user" });
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res, next) {
    try {
      const { email, password, phoneNumber, address } = req.body;
      const users = await User.update({
        email,
        password,
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

      res.status(200).json({
        email: user.email,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      let { id } = req.params;
      const user = await User.findByPk({ id });

      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
