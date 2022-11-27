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
} from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dimensions } from "react-native";
import { fetchItems } from "../stores/reducers/actions";

const windowWidth = Dimensions.get("window").width;

export default function MenuScreen({ navigation }) {
  const { items } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Test");
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
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
// <SafeAreaView>
// </SafeAreaView>

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginLeft: 20,
    marginVertical: 10,
    width: windowWidth / 2 - 30,
  },
  imageContainer: {
    width: "min-content",
  },
  cardImage: {
    resizeMode: "center",
    height: 140,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentContainer: {
    marginTop: -20,
    padding: 14,
  },
  name: {
    fontSize: 16,
    marginBottom: 1,
    fontWeight: "700",
    color: "#18181b",
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17 / 0.7,
    color: "#a1a1aa",
    textAlign: "justify",
    // marginBottom: 10
  },
  tagContainer: {
    flexDirection: "row",
  },
  tag: {
    backgroundColor: "#d6a1a1",
    color: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 8,
    padding: 10,
    fontWeight: "600",
  },
});

// <Text>Home Screens</Text>
// 		<TouchableOpacity
// 			className="hover:bg-darkpink bg-pinkpastel rounded-full border border-pinkpastel text-white px-8 py-2 text-sm"
// 			onPress={() => {
// 				navigation.navigate("Detail")
// 			}}
// 		>
// 		 	<Text className="text-lg text-white font-bold">
// 				Press Here
// 			</Text>
// 		</TouchableOpacity>
