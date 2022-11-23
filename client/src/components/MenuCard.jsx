import { Button, Text, View, Image, StyleSheet } from "react-native";

export default function MenuCard({ navigation, category }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/apZ1DxDmKvwS2lV12Elp.png",
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{category.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    width: "90%",
    marginBottom: 3,
    backgroundColor: "white",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "center",
    marginHorizontal: 25,
  },
  titleContainer: {
    height: 80,
    width: "50%",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
  },
});
