import React, { useRef } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import AppLoading from "expo-app-loading";
import { navigate } from "../utils/RootNavigation";

const Homepage = () => {
  let [fontsLoaded] = useFonts({
    Amaranth_700Bold,
  });
  const videoRef = useRef(null);
  const handlePressFizz = async () => {
    videoRef.current.presentFullscreenPlayer();
    videoRef.current.playAsync();
  };
  const handlePlayback = async (e) => {
    if (e.didJustFinish) {
      videoRef.current.dismissFullscreenPlayer();
      navigate("TheFizz");
    }
  };
  const handleFullscreen = async ({ fullscreenUpdate }) => {
    if (fullscreenUpdate === 0) {
      // enter full screen
      videoRef.current.playAsync();
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
    }
    if (fullscreenUpdate === 2) {
      // exit full screen
      videoRef.current.pauseAsync();
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
  };
  return fontsLoaded ? (
    <ImageBackground
      source={require("../../assets/post-it.png")}
      resizeMode="cover"
      style={styles.backgroungImage}>
      <View style={styles.card}>
        <Text style={[styles.cardHeading, { fontSize: 33 }]}>The Decider</Text>
        <Text style={[styles.cardHeading, { fontSize: 20 }]}>LIFE SKILLS</Text>
        <Text>What brings you here today?</Text>
        <Pressable onPress={() => navigate("Handbook")} style={styles.btnGO}>
          <Text
            style={[styles.cardHeading, { fontSize: 20, color: "#ffffff" }]}>
            Practice
          </Text>
        </Pressable>
        <Pressable onPress={() => handlePressFizz()} style={styles.btnGO}>
          <Text
            style={[styles.cardHeading, { fontSize: 20, color: "#ffffff" }]}>
            Feeling the FIZZ
          </Text>
        </Pressable>
        <Video
          ref={videoRef}
          source={require("../../assets/skills/TheFIZZ/TheFIZZ-Original.mp4")}
          resizeMode="contain"
          useNativeControls
          onFullscreenUpdate={handleFullscreen}
          onPlaybackStatusUpdate={(stat) => handlePlayback(stat)}
        />
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
