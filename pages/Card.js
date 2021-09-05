import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Card = ({ data }) => {
  const { imageUrl } = data;
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Image
          source={{ uri: imageUrl, width: 150, height: 150 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 24, marginLeft: 10, fontWeight: "700" }}>
          {data.name}
        </Text>
      </View>
      <Text style={{ marginTop: 10 }}>{data.definition}</Text>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    width: "80%",
    margin: "auto",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",
    padding: 10,
  },
});
