const { Category } = require("../models/index");

class ControllerCategory {
  static async readCategory(req, res, next) {
    try {
      const data = await Category.findAll({});

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createCategory(req, res, next) {
    const { name } = req.body;
    try {
      const data = await Category.create({
        name,
      });

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async countCategory(req, res, next) {
    try {
      const count = await Category.count();
      res.status(200).json(count);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Category.destroy({
        where: {
          id,
        },
      });

      if (!data) {
        throw { name: `data_not_found`, id };
      } else {
        res.status(200).json({
          message: `Category deleted successfully`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async updateCategory(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const data = await Category.update(
        {
          name,
        },
        { where: { id } }
      );

      res.status(201).json({
        message: `Category updated successfully`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerCategory;
