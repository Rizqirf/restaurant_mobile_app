import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { getCategories } from "../stores/apollo/queries";

export default function HomeScreen({ navigation }) {
  const { loading, error, data } = useQuery(getCategories);

  // useEffect(() => {
  //   setTimeout(() => {
  //     return (
  //       <View style={styles.loading}>
  //         <ActivityIndicator size="large" color="#FFBC0D" />
  //       </View>
  //     );
  //   }, 5000);
  // }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Menu", { categoryId: item.id });
        }}
      >
        <View style={styles.cardContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/apZ1DxDmKvwS2lV12Elp.png",
            }}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.name}</Text>
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
    <View>
      <View style={styles.titleContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.cbc.ca/1.6389950.1647624886!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_780/russia-mcdaonld-s-symbol.jpeg",
          }}
        />
        <Text style={styles.title}>BcDonald's</Text>
      </View>
      <View style={styles.categoryContainer}>
        <FlatList
          horizontal={false}
          numColumns={1}
          data={data.getCategories}
          renderItem={renderItem}
          showsVerticalScrollIndicator={true}
          keyExtractor={(category) => category.id}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Menu", { categoryId: "All" });
          }}
        >
          <Text style={styles.buttonText}>View All</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "#292929",
  },
  categoryContainer: {
    alignItems: "center",
  },
  button: {
    borderColor: "black",
    borderRadius: 16,
    width: "70%",
    marginTop: 25,
    backgroundColor: "#d90007",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
    textAlignVertical: "center",
    height: 40,
    color: "white",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    borderColor: "black",
    borderRadius: 16,
    marginBottom: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "center",
  },
  nameContainer: {
    height: 60,
    width: "50%",
    justifyContent: "center",
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    color: "#292929",
    fontWeight: "500",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});
