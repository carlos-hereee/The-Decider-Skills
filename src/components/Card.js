import React from "react";
import { Image, StyleSheet, View, Platform } from "react-native";
import VideoPlayer from "../components/VideoPlayer";
import { Text } from "react-native-elements";

const Card = ({ data }) => {
  const imageStyle = {
    width: Platform.OS === "web" ? 150 : 100,
    height: Platform.OS === "web" ? 150 : 100,
    margin: 5,
  };
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: data?.imageUrl }}
          style={imageStyle}
          resizeMode="contain"
        />
        <Text h4 style={{ fontWeight: "600", maxWidth: "55%" }}>
          {data.name}
        </Text>
      </View>
      <View style={styles.definition}>
        <Text style={{ textAlign: "center" }}>{data.definition}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <VideoPlayer vid={data} />
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
  definition: {
    backgroundColor: "#CBE9ED",
    padding: 5,
    marginBottom: 5,
    borderRadius: 4,
  },
});
