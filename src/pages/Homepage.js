import React, { useState, useRef, useEffect } from "react";
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
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import videoURI from "../components/videoURI";

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
const Homepage = () => {
  let [fontsLoaded] = useFonts({ Amaranth_700Bold });
  const videoRef = useRef(null);
  const [video, setVideo] = useState({});
  const { fontScale } = Dimensions.get("window");
  const [quality, setQuality] = useState("original");

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
      setVideo({});
    }
  };
  const handlePlayback = async (e) => {
    if (e.playableDurationMillis <= e.positionMillis) {
      videoRef.current.dismissFullscreenPlayer();
    }
  };
  useEffect(() => {
    if (video.key) {
      const loadedVideo = async () => {
        await videoRef.current.presentFullscreenPlayer();
      };
      loadedVideo();
    }
  }, [video.key]);

  return fontsLoaded ? (
    <ImageBackground
      source={require("../../assets/post-it.png")}
      resizeMode="cover"
      style={styles.backgroungImage}>
      <View style={styles.container}>
        {video.videoName && (
          <Video
            ref={videoRef}
            resizeMode="contain"
            source={videoURI[video.videoName][quality]}
            onPlaybackStatusUpdate={(stat) => handlePlayback(stat)}
            onFullscreenUpdate={handleFullscreen}
          />
        )}
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
            <Pressable
              style={[styles.button, { paddingVertical: "3%" }]}
              onPress={() => setVideo(item)}>
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
