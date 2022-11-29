import { gql } from "@apollo/client";

export const getCategories = gql`
  query GetCategories {
    getCategories {
      id
      name
    }
  }
`;

export const getItems = gql`
  query GetItems($categoryId: ID) {
    getItems(categoryId: $categoryId) {
      id
      price
      name
      imgUrl
      categoryId
    }
  }
`;

export const getItemDetail = gql`
  query GetItem($id: ID) {
    getItem(id: $id) {
      name
      description
      price
      imgUrl
      author
      Category {
        name
      }
      Ingredients {
        name
      }
    }
  }
`;
