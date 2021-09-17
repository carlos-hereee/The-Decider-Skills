import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import AppLoading from "expo-app-loading";
import { navigate } from "../utils/RootNavigation";
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
  ];

  return fontsLoaded ? (
    <ImageBackground
      source={require("../../assets/post-it.png")}
      resizeMode="cover"
      style={styles.backgroungImage}>
      <View style={styles.container}>
        <View>
          <Text style={styles.cardHeading}>The Decider</Text>
          <Text style={styles.cardHeading}>Skills</Text>
        </View>
        <FlatList
          horizontal
          data={introVideos}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                marginVertical: 10,
              }}>
              <VideoPlayer vid={item} />
            </View>
          )}
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Pressable onPress={() => navigate("TheFizz")} style={styles.btnGO}>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    height: "60%",
    width: "80%",
    padding: "5%",
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
    elevation: 5,
  },
  cardHeading: {
    color: "#00122C",
    textAlign: "center",
    fontFamily: "Amaranth_700Bold",
    fontSize: 28,
  },
  btnGO: {
    textAlign: "center",
    flex: 1,
    height: 50,
    marginHorizontal: 5,
    fontFamily: "Amaranth_700Bold",
    marginTop: "auto",
    padding: 10,
    backgroundColor: "#00A89E",
    borderRadius: 4,
    elevation: 5,
  },
});
