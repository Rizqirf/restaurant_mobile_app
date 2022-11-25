import { useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import MenuCard from "../components/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../stores/reducers/actions";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchCategories());
  });
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>BcDonald's Menu</Text>
      </View>
      <View style={styles.categoryContainer}>
        {categories.map((el) => {
          return <MenuCard category={el} key={el.id} />;
        })}
        <Button
          title="Go Back"
          onPress={() => {
            navigation.navigate("Menu");
          }}
        />
      </View>
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
