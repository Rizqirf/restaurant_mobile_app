import { useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import MenuCard from "../components/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../stores/reducers/actions";

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontSize: 40,
    fontWeight: "500",
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 50,
    alignSelf: "center",
    color: "black",
  },
  categoryContainer: { alignItems: "center" },
});
