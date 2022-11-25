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
    borderRadius: 16,
    width: "90%",
    marginBottom: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "center",
    // marginHorizontal: 40,
    marginLeft: 40,
  },
  titleContainer: {
    height: 70,
    width: "50%",
    justifyContent: "center",
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});
