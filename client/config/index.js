import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://d707-139-228-111-125.ap.ngrok.io/",
  cache: new InMemoryCache(),
});
