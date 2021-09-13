import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import homepageBackground from "../../assets/post-it.png";
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
        <Text style={[styles.cardHeading, { fontSize: 33 }]}>The Decider</Text>
        <Text style={[styles.cardHeading, { fontSize: 20 }]}>LIFE SKILLS</Text>
        <Text>What brings you here today?</Text>
        <Pressable
          onPress={() => navigation.navigate("Handbook")}
          style={styles.btnGO}>
          <Text
            style={[styles.cardHeading, { fontSize: 20, color: "#ffffff" }]}>
            Practice
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("TheFizz")}
          style={styles.btnGO}>
          <Text
            style={[styles.cardHeading, { fontSize: 20, color: "#ffffff" }]}>
            Feeling the FIZZ
          </Text>
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
    backgroundColor: "#ffffff",
  },
  card: {
    padding: 30,
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
    elevation: 5,
  },
  cardHeading: {
    color: "#00122C",
    textAlign: "center",
    fontFamily: "Amaranth_700Bold",
  },
  btnGO: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Amaranth_700Bold",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#00A89E",
    borderRadius: 4,
    elevation: 5,
  },
});
