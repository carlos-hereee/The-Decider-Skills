import React from "react";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import VideoPlayer from "../components/VideoPlayer";

const Card = ({ data }) => {
  const imageStyle = {
    width: Platform.OS === "web" ? 150 : 100,
    height: Platform.OS === "web" ? 150 : 100,
  };
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: data?.imageUrl }}
          style={imageStyle}
          resizeMode="contain"
        />
        <Text style={{ fontWeight: "700" }}>{data.name}</Text>
      </View>
      <ScrollView style={styles.definition}>
        <Text style={{ textAlign: "center", height: "100%" }}>
          {data.definition}
        </Text>
      </ScrollView>
      <VideoPlayer vid={data} />
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
    paddingHorizontal: 5,
    borderRadius: 4,
  },
});
