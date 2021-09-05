import React from "react";
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
        <Text style={[styles.cardHeading, { fontSize: 33 }]}>the decider</Text>
        <Text style={[styles.cardHeading, { fontSize: 20 }]}>SKILLS</Text>
        <Pressable
          onPress={() => navigation.navigate("Handbook")}
          style={styles.btnGO}>
          Start
        </Pressable>
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
    backgroundColor: "#2185d6",
    borderRadius: 4,
  },
  cardHeading: {
    color: "white",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: " Amaranth_700Bold",
  },
  btnGO: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    fontFamily: " Amaranth_700Bold",
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ecf005",
    borderRadius: 4,
  },
});
