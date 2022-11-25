const { Item } = require("../models");

const authorizeDeleteItem = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      const job = await Item.findByPk(req.params.id);
      if (!job) throw { name: "data_not_found" };
      if (req.user.role !== "staff" && job.authorId !== req.user.id)
        throw { name: "forbidden" };
    }
    next();
  } catch (error) {
    next(error);
  }
};
const authorizeEditItem = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") throw { name: "forbidden" };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authorizeDeleteItem,
  authorizeEditItem,
};
