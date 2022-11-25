import { Button, Text, View } from "react-native";

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
