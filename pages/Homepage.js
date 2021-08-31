import React from "react";
import { ImageBackground, Text, View } from "react-native";
import homepageBackground from "../assets/post-it.svg";
import { styles } from "../stylesheets";

const Homepage = () => {
  return (
    <ImageBackground
      source={homepageBackground}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <View style={styles.homepageCard}>
        <Text style={styles.homepageText}>the decider</Text>
        <Text style={styles.homepageText}>LIFE SKILLS </Text>
        {/* <Text href="/skill" className="btn btn-warning">
          Go
        </Text> */}
      </View>
    </ImageBackground>
  );
};

export default Homepage;
