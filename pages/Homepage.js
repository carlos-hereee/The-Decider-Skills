import React from "react";
import { Button, ImageBackground, Text, View } from "react-native";
import homepageBackground from "../assets/post-it.svg";
import { styles } from "../stylesheets";

const Homepage = ({ navigation }) => {
  return (
    <ImageBackground
      source={homepageBackground}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <View style={styles.homepageCard}>
        <Text style={styles.homepageText}>the decider</Text>
        <Text style={styles.homepageText}>LIFE SKILLS </Text>
        <Button title="GO" onPress={() => navigation.navigate("Handbook")} />
      </View>
    </ImageBackground>
  );
};

export default Homepage;
