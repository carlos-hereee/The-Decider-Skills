import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import AppLoading from "expo-app-loading";
import { navigate } from "../utils/RootNavigation";
import { FlatList } from "react-native-gesture-handler";
import VideoPlayer from "../components/VideoPlayer";

const Homepage = () => {
  let [fontsLoaded] = useFonts({ Amaranth_700Bold });
  const introVideos = [
    {
      key: "intro",
      name: "Introduction",
      videoName: "TheDeciderIntroduction",
    },
    {
      key: "theFizz",
      name: "The Fizz",
      videoName: "TheFIZZ",
    },
    {
      key: "CBT",
      name: "CBT",
      videoName: "CBT",
    },
    {
      key: "CognitiveBehaviourTherapy",
      name: "Cognitive Behaviour Therapy",
      videoName: "CognitiveBehaviourTherapy",
    },
  ];

  return fontsLoaded ? (
    <ImageBackground
      source={require("../../assets/post-it.png")}
      resizeMode="cover"
      style={styles.backgroungImage}>
      <View style={styles.card}>
        <Text style={[styles.cardHeading, { fontSize: 33 }]}>The Decider</Text>
        <Text style={[styles.cardHeading, { fontSize: 33 }]}>Skills</Text>
        <FlatList
          horizontal
          data={introVideos}
          renderItem={({ item }) => <VideoPlayer vid={item} />}
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Pressable onPress={() => handlePressFizz()} style={styles.btnGO}>
            <Text
              style={[styles.cardHeading, { fontSize: 20, color: "#ffffff" }]}>
              12 Skills
            </Text>
          </Pressable>
          <Pressable onPress={() => navigate("Handbook")} style={styles.btnGO}>
            <Text
              style={[styles.cardHeading, { fontSize: 20, color: "#ffffff" }]}>
              32 Skills
            </Text>
          </Pressable>
        </View>
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
    height: "50%",
    width: "80%",
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
    flex: 1,
    height: 50,
    marginHorizontal: 5,
    fontSize: 20,
    fontFamily: "Amaranth_700Bold",
    marginTop: "auto",
    padding: 10,
    backgroundColor: "#00A89E",
    borderRadius: 4,
    elevation: 5,
  },
});
