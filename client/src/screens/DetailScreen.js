import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screensss</Text>
      <Button
        title="See detail.."
        onPress={() => {
          navigation.navigate("Detail");
        }}
      />
    </View>
  );
}
