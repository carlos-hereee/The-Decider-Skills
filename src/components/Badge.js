import React from "react";
import { Image, ImageBackground, View } from "react-native";

const Badge = ({ src }) => {
  return (
    <ImageBackground
      source={require("../../assets/Star.png")}
      style={{ width: 300, height: 300 }}
      resizeMode="contain">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={{ uri: src, width: 200, height: 200 }} />
      </View>
    </ImageBackground>
  );
};
export default Badge;
