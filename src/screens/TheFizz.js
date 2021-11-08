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
import GoBack from "../components/GoBack";
import { imageURI } from "../components/ImageUri";
import { globalStyles } from "../styles";
import { HandbookContext } from "../utils/Context";
import { navigate } from "../utils/RootNavigation";
import data from "../utils/theFizz.json";

const { width, height } = Dimensions.get("window");
const TheFizz = () => {
  const { makeActive } = useContext(HandbookContext);
  const handlePress = (item) => {
    makeActive(data, item);
    navigate("Skills");
  };
  const imageStyle = {
    width: Platform.OS === "web" ? 80 : 50,
    height: Platform.OS === "web" ? 80 : 50,
  };
  return (
    <View style={styles.menu}>
      <View style={{ marginRight: "auto" }}>
        <GoBack />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <FlatList
          data={data}
          numColumns={3}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handlePress(item)}
              style={[styles.listItem, globalStyles.shadow]}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-around",
                }}>
                <Image
                  source={imageURI[item.imageUrl]}
                  resizeMode="contain"
                  style={imageStyle}
                />
                <Text style={{ textAlign: "center" }}>
                  {item.name.toUpperCase()}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};
export default TheFizz;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  listItem: {
    padding: 10,
    backgroundColor: "#EFF5FA",
    margin: 5,
    width: width / 3.3,
    height: height / 6,
    borderRadius: 4,
  },
});
