const axios = require("axios");
const baseUrl = "http://localhost:4002";

const Redis = require("ioredis");
const redis = new Redis({
  port: 18994,
  host: "redis-18994.c295.ap-southeast-1-1.ec2.cloud.redislabs.com",
  username: "default",
  password: "PqYDPRDANrXOA2FuTgzLXs2DStDcthjj",
  db: 0,
});

const typeDefs = `#graphql
  type Item {
	id: ID
	name: String 
	description: String
	price: Int
	imgUrl: String
	authorId: Int
	categoryId: Int
	Category: Category
	Ingredients: [Ingredient]
  }

  type Category {
	id: ID
	name: String 
  }

  type Ingredient {
	name: String
	ItemIngredient: ItemIngredient
  }

  type ItemIngredient {
	id: ID
	ItemId: Int
	IngredientId: Int
	createdAt: String
	updatedAt: String
  }


  input ItemInput {
	name: String 
	description: String
	price: Int
	imgUrl: String
	categoryId: Int
	Ingredients: [Int]
  }

  type Query {
    getItems(categoryId:ID): [Item]
    getItem(id: ID): Item
	getCategories: [Category]
  } 

  type Mutation {
	addItem(newItem: ItemInput): String 
	editItem(editedItem: ItemInput): String 
	deleteItem(id: ID): String 
  }
`;

const resolvers = {
  Query: {
    getItems: async (_, args) => {
      try {
        const { categoryId } = args;
        const category = await redis.get("cat");

        if (categoryId == category) {
          const dataCache = await redis.get("items");
          return JSON.parse(dataCache);
        } else {
          if (categoryId === "All") {
            const { data } = await axios.get(`${baseUrl}/items`);
            await redis.set("cat", category);
            await redis.set("items", JSON.stringify(data));
            return data;
          } else {
            let query = `?category=${categoryId}`;
            const { data } = await axios.get(`${baseUrl}/items` + query);
            await redis.set("cat", category);
            await redis.set("items", JSON.stringify(data));
            return data;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    getItem: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.get(`${baseUrl}/items/${id}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    getCategories: async () => {
      try {
        const dataCache = await redis.get("categories");
        if (dataCache) {
          return JSON.parse(dataCache);
        } else {
          const { data } = await axios.get(`${baseUrl}/categories`);
          await redis.set("categories", JSON.stringify(data));
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addItem: async (_, args) => {
      try {
        const { newItem } = args;
        const { data } = await axios.post(`${baseUrl}/items`, newItem);
        await redis.del("items");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    editItem: async (_, args) => {
      try {
        const { editedItem, id } = args;
        const { data } = await axios.put(`${baseUrl}/items/${id}`, editedItem);
        await redis.del("items");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    deleteItem: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.delete(`${baseUrl}/items/${id}`);
        await redis.del("items");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = {
  resolvers,
  typeDefs,
};