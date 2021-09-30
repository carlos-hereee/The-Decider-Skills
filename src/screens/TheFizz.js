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
import { globalStyles } from "../styles";
import { HandbookContext } from "../utils/Context";
import { navigate } from "../utils/RootNavigation";
import data from "../utils/theFizz.json";

const TheFizz = () => {
  const { makeActive } = useContext(HandbookContext);
  const { width, height } = Dimensions.get("window");

  const handlePress = (item) => {
    makeActive(data.theFizz, item);
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
      <FlatList
        data={data.theFizz}
        numColumns={3}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            style={[
              styles.listItem,
              globalStyles.shadow,
              { width: width / 3.3, height: height / 6 },
            ]}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-around",
              }}>
              <Image
                source={{ uri: item.imageUrl }}
                resizeMode="contain"
                style={imageStyle}
              />
              <Text style={{ fontWeight: "700", textAlign: "center" }}>
                {item.name.toUpperCase()}
              </Text>
            </View>
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
    backgroundColor: "#ffffff",
    ...Platform.select({
      web: {
        width: "100%",
        maxWidth: 1000,
        marginHorizontal: "auto",
      },
    }),
  },
  listItem: {
    padding: 10,
    backgroundColor: "#EFF5FA",
    margin: 5,
    borderRadius: 4,
  },
});
