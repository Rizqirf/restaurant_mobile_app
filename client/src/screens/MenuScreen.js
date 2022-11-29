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
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Dimensions } from "react-native";

import convertRupiah from "rupiah-format";
import { useQuery } from "@apollo/client";
import { getItems } from "../stores/apollo/queries";

const windowWidth = Dimensions.get("window").width;

export default function MenuScreen({ navigation, route }) {
  const { categoryId } = route.params;

  const { loading, error, data } = useQuery(getItems, {
    variables: {
      categoryId,
    },
  });

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", { id: item.id });
        }}
      >
        <View style={styles.cardContainer}>
          <Image
            style={styles.cardImage}
            source={{
              uri: item.imgUrl,
            }}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>
              {convertRupiah.convert(item.price)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FFBC0D" />
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={data.getItems}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 15,
    margin: 10,
  },
  cardContainer: {
    marginLeft: 10,
    marginTop: 10,
    width: (windowWidth - 10) / 2 - 15,
  },
  cardImage: {
    resizeMode: "center",
    height: 140,
  },
  contentContainer: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 1,
    fontWeight: "700",
    color: "#292929",
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    color: "#5a5a5a",
    textAlign: "justify",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});
