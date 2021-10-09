import React from "react";
import { Image, View, Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const Icon = ({ data }) => (
  <View style={{ alignItems: "center" }}>
    <Image
      source={{ uri: data.imageUrl }}
      resizeMode="contain"
      style={{ width: width * 0.15, height: height * 0.07 }}
    />
    <Text style={{ textAlign: "center" }}>{data.name.toUpperCase()}</Text>
  </View>
);
export default Icon;
