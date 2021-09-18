import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
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
  const { width, fontScale } = Dimensions.get("window");
  return fontsLoaded ? (
    <ImageBackground
      source={require("../../assets/post-it.png")}
      resizeMode="cover"
      style={styles.backgroungImage}>
      <View style={styles.container}>
        <Text style={[styles.cardHeading, { fontSize: 30 / fontScale }]}>
          The Decider
        </Text>
        <Text style={[styles.cardHeading, { fontSize: 30 / fontScale }]}>
          Skills
        </Text>
        <View style={{ flexGrow: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 12 / fontScale, textAlign: "center" }}>
            Welcome to The Decider Skills app. Please watch the videos for an
            overview of The Decider, CBT and The FIZZ, or dive straight into the
            Skills reminders.
          </Text>
        </View>
        <FlatList
          data={introVideos}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={({ item }) => (
            <Pressable style={[styles.button, { paddingVertical: "3%" }]}>
              <Text style={styles.buttonTxt}>{item.name}</Text>
            </Pressable>
          )}
        />
        <View style={{ flexGrow: 1, justifyContent: "center" }}>
          <Text style={{ textAlign: "center" }}>
            What brings you here today?
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Pressable onPress={() => navigate("TheFizz")} style={styles.button}>
            <Text style={[styles.buttonTxt, { padding: 5 }]}>12 Skills</Text>
          </Pressable>
          <Pressable onPress={() => navigate("Handbook")} style={styles.button}>
            <Text style={[styles.buttonTxt, { padding: 5 }]}>32 Skills</Text>
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
    height: "70%",
    width: "80%",
    padding: "5%",
    justifyContent: "space-around",
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
    elevation: 10,
  },
  cardHeading: {
    textAlign: "center",
    fontFamily: "Amaranth_700Bold",
    color: "#00122C",
  },
  button: {
    fontFamily: "Amaranth_700Bold",
    marginTop: "auto",
    padding: 5,
    margin: 5,
    backgroundColor: "#00A89E",
    borderRadius: 4,
    elevation: 5,
  },
  buttonTxt: {
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
  },
});
