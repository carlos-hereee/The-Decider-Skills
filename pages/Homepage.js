import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import homepageBackground from "../assets/post-it.png";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import AppLoading from "expo-app-loading";

const Homepage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Amaranth_700Bold,
  });
  return fontsLoaded ? (
    <ImageBackground
      source={homepageBackground}
      resizeMode="cover"
      style={styles.backgroungImage}>
      <View style={styles.card}>
        <Text style={styles.cardHeading}>The Decider</Text>
        <Text style={styles.cardHeading}>Skills</Text>
        <Button title="GO" onPress={() => navigation.navigate("Handbook")} />
      </View>
    </ImageBackground>
  ) : (
    <AppLoading />
  );
};
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
    fontWeight: 700,
    textAlign: "center",
    fontFamily: " Amaranth_700Bold",
  },
});
