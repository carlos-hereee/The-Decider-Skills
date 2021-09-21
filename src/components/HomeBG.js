import React from "react";
import { ImageBackground } from "react-native";

const HomeBG = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/post-it.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}>
      {children}
    </ImageBackground>
  );
};
export default HomeBG;
