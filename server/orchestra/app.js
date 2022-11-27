const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const axios = require("axios");
const baseUrl = "http://localhost:4002";

const typeDefs = `#graphql

type Item {
	id: ID
	name: String 
	description: String
	price: Int
	imgUrl: String
	MongoId: Int
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
	ItemId: String
	IngredientId: Int
	createdAt: String
	updatedAt: String
  }


  type Query {
    getItems: [Item]
    getItemDetail (id:ID):Item
    getCategories :[Category]
  }
`;

const resolvers = {
  Query: {
    getItems: async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/items`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    getItemDetail: async (_, args) => {
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
        const { data } = await axios.get(`${baseUrl}/categories`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`server ready at: ${url}`);
});
