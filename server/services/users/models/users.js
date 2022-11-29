const { getDb } = require("../db/config");
const { passwordHash } = require("../helpers/bcrypt");
const ObjectId = require("mongodb").ObjectId;

class User {
  static async getCollection() {
    try {
      const db = await getDb();
      const collection = db.collection("Users");
      //   console.log(collection);

      return collection;
    } catch (error) {
      console.log(error);
    }
  }
  static async read() {
    try {
      const collection = await this.getCollection();
      const users = await collection.find().toArray();

      return users;
    } catch (error) {
      console.log(error);
    }
  }
  static async delete(id) {
    try {
      const collection = await this.getCollection();
      const users = await collection.deleteOne({ _id: ObjectId(id) });

      return users;
    } catch (error) {
      console.log(error);
    }
  }
  static async create(obj) {
    try {
      const collection = await this.getCollection();
      obj = {
        ...obj,
        role: "admin",
        password: passwordHash(obj.password),
      };
      const users = await collection.insertOne(obj);

      return users;
    } catch (error) {
      console.log(error);
    }
  }
  static async update(obj) {
    try {
      const collection = await this.getCollection();
      obj = {
        ...obj,
        password: passwordHash(obj.password),
      };
      const users = await collection.update({ email: obj.email }, obj);

      return users;
    } catch (error) {
      console.log(error);
    }
  }
  static async findOne(email) {
    try {
      const collection = await this.getCollection();
      const user = await collection.findOne({ email });

      return user;
    } catch (error) {
      console.log(error);
    }
  }
  static async findByPk(id) {
    try {
      const collection = await this.getCollection();
      const user = await collection.findOne({ _id: ObjectId(id) });

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = User;
