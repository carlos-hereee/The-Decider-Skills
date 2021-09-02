import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import homepageBackground from "../assets/post-it.png";

const Homepage = ({ navigation }) => (
  <ImageBackground
    source={homepageBackground}
    resizeMode="cover"
    style={styles.backgroungImage}>
    <View style={styles.card}>
      <Text style={styles.cardHeading}>the decider</Text>
      <Text style={styles.cardHeading}>LIFE HANDBOOK</Text>
      <Button title="GO" onPress={() => navigation.navigate("Handbook")} />
    </View>
  </ImageBackground>
);
export default Homepage;

const styles = StyleSheet.create({
  backgroungImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderWidth: 2,
    padding: 10,
    borderColor: "#135d98",
    backgroundColor: "#a9d1f6",
    borderRadius: 4,
  },
  cardHeading: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
});
