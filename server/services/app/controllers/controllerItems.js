const {
  Item,
  User,
  Category,
  Ingredient,
  ItemIngredient,
  sequelize,
} = require("../models/index");

class ControllerItem {
  static async createItem(req, res, next) {
    console.log(req.body);
    try {
      // const { item, itemIngredients } = req.body;
      const { name, description, imgUrl, price, categoryId } = req.body;
      const result = await sequelize.transaction(async (t) => {
        const newItem = await Item.create(
          {
            name,
            description,
            imgUrl,
            price,
            categoryId,
            // authorId: req.user.id,
            authorId: 1,
          },
          { transaction: t }
        );

        // const mappedIngridients = itemIngredients.map((el) => {
        //   return { ItemId: newItem.id, IngredientId: el };
        // });

        // const newIngredient = await ItemIngredient.bulkCreate(
        //   mappedIngridients,
        //   { ignoreDuplicates: true, transaction: t }
        // );

        return newItem;
      });
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async readItems(req, res, next) {
    try {
      let { category } = req.query;

      let option = {
        order: [["id", "ASC"]],
        include: [
          { model: Category, attributes: ["id", "name"] },
          { model: Ingredient, attributes: ["name"] },
        ],
        where: {},
      };
      if (category) {
        option.where.categoryId = category;
      }

      const data = await Item.findAll(option);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async countItems(req, res, next) {
    try {
      const count = await Item.count();
      res.status(200).json(count);
    } catch (error) {
      next(error);
    }
  }

  static async readItemDetail(req, res, next) {
    const { id } = req.params;
    try {
      const data = await Item.findByPk(id, {
        include: [
          { model: Category, attributes: ["id", "name"] },
          { model: Ingredient, attributes: ["id", "name"] },
        ],
      });
      if (!data) {
        throw { name: `data_not_found` };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;
      const result = await sequelize.transaction(async (t) => {
        // const conjunction = await ItemIngredient.destroy({
        //   where: {
        //     ItemId: id,
        //   },
        //   transaction: t,
        // });
        // if (!conjunction) {
        //   throw { name: `data_not_found` };
        // }

        const data = await Item.destroy({
          where: {
            id,
          },
          transaction: t,
        });

        if (!data) {
          throw { name: `data_not_found` };
        }
      });

      res.status(200).json({
        message: `Item deleted successfully`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async editItem(req, res, next) {
    const { id } = req.params;
    try {
      // const { item, itemIngredients } = req.body;
      // console.log(req.body);
      const { name, description, imgUrl, price, categoryId } = req.body;
      const result = await sequelize.transaction(async (t) => {
        const foundItem = await Item.findByPk(id, { transaction: t });

        if (!foundItem) throw { name: "data_not_found" };

        const updatedItem = await Item.update(
          {
            name,
            description,
            imgUrl,
            price,
            categoryId,
            // authorId: req.user.id,
            authorId: 1,
          },
          { where: { id }, transaction: t }
        );

        // const mappedIngridients = itemIngredients.map((el) => {
        //   return { ItemId: foundItem.id, IngredientId: el };
        // });

        // const clearConjunction = ItemIngredient.destroy({
        //   where: { ItemId: foundItem.id },
        //   transaction: t,
        // });

        // const updatedIngredient = await ItemIngredient.bulkCreate(
        //   mappedIngridients,
        //   { ignoreDuplicates: false, transaction: t }
        // );

        return { message: `Success edit item id ${foundItem.id}` };
      });
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = ControllerItem;
