import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import store from "./src/stores";
import { client } from "./config";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
