"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Ingredient, {
        through: models.ItemIngredient,
        foreignKey: "ItemId",
      });
      Item.belongsTo(models.Category, { foreignKey: "categoryId" });
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Name cannot be empty`,
          },
          notEmpty: {
            msg: `Name cannot be empty`,
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Description cannot be empty`,
          },
          notEmpty: {
            msg: `Description cannot be empty`,
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Price cannot be empty`,
          },
          notEmpty: {
            msg: `Price cannot be empty`,
          },
          min: {
            args: 10000,
            msg: "Price must be higher than 10000",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Image cannot be empty",
          },
          notEmpty: {
            msg: "Image cannot be empty",
          },
          isUrl: {
            msg: "Image Url must be in url format",
          },
        },
      },
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
