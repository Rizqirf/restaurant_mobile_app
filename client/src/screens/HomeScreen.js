import { useEffect } from "react";
import { Button, Text, View, StyleSheet, Pressable } from "react-native";
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
        {/* <Pressable
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("Menu");
          }}
        >
          <Text>"View All"</Text>
        </Pressable> */}
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Menu");
          }}
        >
          <Text style={styles.buttonText}>View All</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontSize: 40,
    fontWeight: "500",
    marginTop: 80,
    marginBottom: 30,
    alignSelf: "center",
    color: "black",
  },
  categoryContainer: { alignItems: "center" },
  button: {
    borderColor: "black",
    borderRadius: 16,
    width: "70%",
    marginTop: 20,
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
    textAlignVertical: "center",
    height: 40,
    color: "white",
  },
});
