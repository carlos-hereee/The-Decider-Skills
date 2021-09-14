import React from "react";
import { Image, ImageBackground, View } from "react-native";

const Badge = ({ data }) => {
  return (
    <ImageBackground
      source={require("../../assets/Star.png")}
      style={{ width: data.backgroundSize, height: data.backgroundSize }}
      resizeMode="contain">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: data.src }}
          style={{ width: data.iconSize, height: data.iconSize }}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};
export default Badge;
