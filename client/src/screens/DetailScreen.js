import { useQuery } from "@apollo/client";
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
  ScrollView,
  ActivityIndicator,
} from "react-native";
import convertRupiah from "rupiah-format";
import { getItemDetail } from "../stores/apollo/queries";

export default function DetailScreen({ navigation, route }) {
  const { id } = route.params;

  const { loading, error, data } = useQuery(getItemDetail, {
    variables: { id },
  });

  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FFBC0D" />
      </View>
    );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.name}>{data.getItem.name}</Text>
        <Text style={styles.category}>{data.getItem.Category.name}</Text>
        <Image
          style={styles.cardImage}
          source={{
            uri: data.getItem.imgUrl,
          }}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.description}>
            {"\t"}
            {"\t"}
            {data.getItem.description}
          </Text>
          <Text style={styles.description}>
            Created by: {data.getItem.author}
          </Text>
          <Text style={styles.ingredients}>Ingredients :</Text>
          {data.getItem.Ingredients.map((el, i) => {
            return (
              <Text key={i} style={styles.ingredientItem}>
                &#x2022; {el.name}
              </Text>
            );
          })}
          <Text style={styles.price}>
            {convertRupiah.convert(data.getItem.price)}
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonRed}>
              <Text style={styles.buttonTextRed}>Buy now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonYellow}>
              <Text style={styles.buttonTextYellow}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 16,
  },
  name: {
    fontSize: 32,
    marginTop: 10,
    marginBottom: 2,
    fontWeight: "700",
    color: "#292929",
    alignSelf: "center",
  },
  category: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "700",
    color: "#292929",
    alignSelf: "center",
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "700",
    color: "#292929",
  },
  ingredientItem: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 14 / 0.7,
    color: "#5a5a5a",
    textAlign: "justify",
    marginLeft: 10,
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

  description: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 14 / 0.7,
    color: "#5a5a5a",
    textAlign: "justify",
    marginBottom: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#292929",
    marginTop: 20,
    textAlign: "justify",
  },
  buttonContainer: { marginTop: 15 },
  buttonRed: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#d90007",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  buttonTextRed: {
    color: "#fff",
    fontWeight: "700",
  },
  buttonYellow: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#FFBC0D",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  buttonTextYellow: {
    color: "#292929",
    fontWeight: "700",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});
