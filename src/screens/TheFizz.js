import React, { useContext } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { HandbookContext } from "../utils/Context";
import { navigate } from "../utils/RootNavigation";
import data from "../utils/theFizz.json";

const TheFizz = () => {
  const { makeActive } = useContext(HandbookContext);
  const { width, height } = Dimensions.get("window");

  const handlePress = (item) => {
    makeActive({ title: item.name, skills: data.theFizz });
    navigate("Skills");
  };
  const imageStyle = {
    width: Platform.OS === "web" ? 80 : 50,
    height: Platform.OS === "web" ? 80 : 50,
  };
  return (
    <View style={styles.menu}>
      <FlatList
        data={data.theFizz}
        numColumns={3}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            style={[
              styles.listItem,
              { width: width / 3.3, height: height / 6 },
            ]}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={{ uri: item.imageUrl }}
                resizeMode="contain"
                style={imageStyle}
              />
            </View>
            <Text style={{ fontWeight: "700", textAlign: "center" }}>
              {item.name.toUpperCase()}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};
export default TheFizz;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    padding: 5,
    backgroundColor: "#EFF5FA",
    margin: 5,
    borderRadius: 4,
    ...Platform.select({
      web: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      default: {
        elevation: 5,
      },
    }),
  },
});
