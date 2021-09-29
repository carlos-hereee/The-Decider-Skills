import React, { useContext } from "react";
import { Image, StyleSheet, View, Platform } from "react-native";
import VideoPlayer from "../components/VideoPlayer";
import { Text } from "react-native-elements";
import { globalStyles } from "../styles";
import { HandbookContext } from "../utils/Context";

const Card = () => {
  const { active } = useContext(HandbookContext);
  const imageStyle = {
    width: Platform.OS === "web" ? 150 : 100,
    height: Platform.OS === "web" ? 150 : 100,
    margin: 5,
  };
  return (
    <View style={[styles.card, globalStyles.shadow]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: active?.imageUrl }}
          style={imageStyle}
          resizeMode="contain"
        />
        <Text h4 style={{ fontWeight: "600", maxWidth: "55%" }}>
          {active?.name}
        </Text>
      </View>
      <View style={[styles.definition]}>
        <Text style={{ textAlign: "center" }}>{active?.definition}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <VideoPlayer />
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    backgroundColor: "#EFF5FA",
    marginHorizontal: 20,
    padding: 5,
    height: "60%",
  },
  definition: {
    backgroundColor: "#CBE9ED",
    padding: 5,
    marginBottom: 5,
    borderRadius: 4,
  },
});
