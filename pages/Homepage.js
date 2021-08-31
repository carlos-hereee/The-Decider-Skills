import React from "react";
import { ImageBackground, Text, View } from "react-native";
import homepageBackground from "../assets/post-it.svg";

const Homepage = () => {
  return (
    <ImageBackground
      source={homepageBackground}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}>
      <View className="container homepage">
        <View className="homepage-header">
          <Text>the decider</Text>
          <Text>LIFE SKILLS </Text>
          <Text href="/skill" className="btn btn-warning">
            Go
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Homepage;
