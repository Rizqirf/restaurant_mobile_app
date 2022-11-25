const { Ingredient } = require("../models");

class ControllerIngredients {
  static async fetchIngredients(req, res, next) {
    try {
      const data = await Ingredient.findAll({});

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = ControllerIngredients;
