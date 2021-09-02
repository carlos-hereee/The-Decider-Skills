import React from "react";
import { Button, ImageBackground, Text, View } from "react-native";
import { styles } from "../stylesheets";

const Homepage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/post-it.png")}
      resizeMode="cover"
      style={{ flex: 1, width: "100%", height: "100%" }}>
      <View style={styles.homepageCard}>
        <Text style={{ color: "white", fontSize: 36 }}>the decider</Text>
        <Text style={{ color: "white", fontSize: 36 }}>LIFE SKILLS </Text>
        <Button
          title="GO"
          style={{ color: "white", margin: 30 }}
          onPress={() => navigation.navigate("Handbook")}
        />
      </View>
    </ImageBackground>
  );
};

export default Homepage;
