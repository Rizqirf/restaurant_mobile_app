const axios = require("axios");
const baseUrl = "http://54.255.227.74:4001";

const typeDefs = `#graphql
  type User {
	_id: ID
	username: String 
	email: String
	password: String
	role: String
	phoneNumber: String
	address: String
  }

  type Login {
	_id: ID
	email: String 
  }

  input UserInput {
	email: String
	password: String
	phoneNumber: String
	address: String
  }

  type Query {
    getUsers: [User]
    getUser(id:ID): User
    login(username: String, password: String): Login
  }

  type Mutation {
	addUser(input: UserInput): String 
	editUser(input: UserInput,id:ID): String 
	deleteUser(id: ID): String 
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/users`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    login: async (_, args) => {
      try {
        const { username, password } = args;
        const { data } = await axios.post(`${baseUrl}/login`, {
          username,
          password,
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    getUser: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.get(`${baseUrl}/users/${id}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addUser: async (_, args) => {
      try {
        const { input } = args;
        const { data } = await axios.post(`${baseUrl}/users`, input);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    editUser: async (_, args) => {
      try {
        const { input, id } = args;
        const { data } = await axios.put(`${baseUrl}/users/${id}`, input);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.delete(`${baseUrl}/users/${id}`);
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
