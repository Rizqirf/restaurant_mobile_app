import {
  StatusBar,
  Button,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dimensions } from "react-native";
import { fetchItemDetail } from "../stores/reducers/actions";

const windowWidth = Dimensions.get("window").width;

export default function DetailScreen({ navigation, route }) {
  // const { id } = route.params;

  const detail = {
    id: "1",
    name: "Egg and Cheese Muffin",
    description:
      "In sollicitudin tortor sit amet massa facilisis porttitor. Vivamus vulputate, odio sit amet facilisis placerat, est dolor luctus erat, a ornare enim elit sed felis. Maecenas dui ex, varius vel euismod a, volutpat eu quam. Nulla ullamcorper elementum mauris non vehicula. Sed accumsan sollicitudin ligula a vulputate. Maecenas sodales enim sodales turpis consequat, ut ultrices tortor lacinia. Sed nunc lorem, interdum in felis vitae, volutpat feugiat tellus.",
    price: 36000,
    imgUrl:
      "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/9FcgMqqWSFYjE6edaOAL.png",
    MongoId: null,
    categoryId: 1,
    Category: {
      id: "1",
      name: "Breakfast",
    },
    Ingredients: [
      {
        name: "Big Mac Bun",
        ItemIngredient: {
          id: null,
          ItemId: "1",
          IngredientId: 1,
          createdAt: "2022-11-20T10:21:04.812Z",
          updatedAt: "2022-11-20T10:21:04.812Z",
        },
      },
      {
        name: "100% Beef Patty",
        ItemIngredient: {
          id: null,
          ItemId: "1",
          IngredientId: 2,
          createdAt: "2022-11-20T10:21:04.812Z",
          updatedAt: "2022-11-20T10:21:04.812Z",
        },
      },
      {
        name: "Pasteurized Process American Cheese",
        ItemIngredient: {
          id: null,
          ItemId: "1",
          IngredientId: 5,
          createdAt: "2022-11-20T10:21:04.812Z",
          updatedAt: "2022-11-20T10:21:04.812Z",
        },
      },
    ],
  };

  const [itemDetail, setItemDetail] = useState(detail);

  useEffect(() => console.log(itemDetail), []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.cardImage}
        source={{
          uri: itemDetail.imgUrl,
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{itemDetail.name}</Text>
        <Text>{itemDetail.Category.name}</Text>
        <Text style={styles.description}>{itemDetail.description}</Text>
        <Text>Ingredients :</Text>
        {itemDetail.Ingredients.map((el, i) => {
          return (
            <Text key={i} style={styles.description}>
              &#x2022; {el.name}
            </Text>
          );
        })}

        <Text style={styles.description}>{itemDetail.price}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>#{itemDetail.Category.name}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonPink}>
            <Text style={styles.buttonTextPink}>Buy now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGrey}>
            <Text style={styles.buttonTextGrey}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 16,
  },
  cardImage: {
    resizeMode: "center",
    height: 240,
    marginVertical: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentContainer: {
    marginTop: -30,
    padding: 20,
  },
  name: {
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "700",
    color: "#18181b",
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 14 / 0.7,
    color: "#a1a1aa",
    textAlign: "justify",
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: "row",
  },
  tag: {
    backgroundColor: "#d6a1a1",
    color: "#fff",
    borderRadius: 10,
    marginRight: 8,
    padding: 10,
    fontWeight: "600",
  },
  buttonPink: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#d6a1a1",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  buttonTextPink: {
    color: "#fff",
    fontWeight: "700",
  },
  buttonGrey: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#e7e5e4",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  buttonTextGrey: {
    color: "#18181b",
    fontWeight: "700",
  },
});
