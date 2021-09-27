import React, { useState, useRef, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Text } from "react-native-elements";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import AppLoading from "expo-app-loading";
import { navigate } from "../utils/RootNavigation";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import HomeBG from "../components/HomeBG";
import { getVideoUrl } from "../utils/firebase.config";

const introVideos = [
  {
    key: "intro",
    name: "Introduction",
    original:
      "gs://the-decider-skills.appspot.com/skills/TheFIZZ/TheFIZZ-Original.mp4",
    360: "gs://the-decider-skills.appspot.com/skills/TheFIZZ/TheFIZZ-360.mp4",
    540: "gs://the-decider-skills.appspot.com/skills/TheFIZZ/TheFIZZ-540.mp4",
    720: "gs://the-decider-skills.appspot.com/skills/TheFIZZ/TheFIZZ-720.mp4",
  },
  {
    key: "theFizz",
    name: "The Fizz",
    original:
      "gs://the-decider-skills.appspot.com/skills/TheFIZZ/TheFIZZ-Original.mp4",
    360: "gs://the-decider-skills.appspot.com/skills/TheFIZZ/TheFIZZ-360.mp4",
    540: "gs://the-decider-skills.appspot.com/skills/TheFIZZ/TheFIZZ-540.mp4",
    720: "gs://the-decider-skills.appspot.com/skills/TheFIZZ/TheFIZZ-720.mp4",
  },
  {
    key: "CBT",
    name: "CBT",
    original: "gs://the-decider-skills.appspot.com/skills/CBT/CBT-Original.mp4",
    360: "gs://the-decider-skills.appspot.com/skills/CBT/CBT-360.mp4",
    540: "gs://the-decider-skills.appspot.com/skills/CBT/CBT-540.mp4",
    720: "gs://the-decider-skills.appspot.com/skills/CBT/CBT-720.mp4",
  },
];
const Homepage = () => {
  let [fontsLoaded] = useFonts({ Amaranth_700Bold });
  const videoRef = useRef(null);
  const [video, setVideo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
      getVideoUrl(video[quality]).then((url) =>
        setVideo({ ...video, source: { uri: url } })
      );
      const loadedVideo = async () => {
        await videoRef.current.presentFullscreenPlayer();
        setIsLoading(false);
      };
      loadedVideo();
    }
  }, [video.key]);
  return fontsLoaded ? (
    <HomeBG>
      <View style={[styles.container, ,]}>
        {video.key && (
          <Video
            ref={videoRef}
            resizeMode="contain"
            source={video?.source}
            onPlaybackStatusUpdate={(stat) => handlePlayback(stat)}
            onFullscreenUpdate={handleFullscreen}
          />
        )}
        <Text h2 style={[styles.cardHeading, { fontSize: 30 / fontScale }]}>
          The Decider
        </Text>
        <Text h2 style={[styles.cardHeading, { fontSize: 30 / fontScale }]}>
          Skills
        </Text>
        <View style={{ flexGrow: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 12 / fontScale, textAlign: "center" }}>
            Welcome to The Decider Skills app. Please watch the videos for an
            overview of The Decider, CBT and The FIZZ, or dive straight into the
            Skills reminders.
          </Text>
        </View>
        {!isLoading ? (
          <FlatList
            data={introVideos}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item }) => (
              <Pressable
                style={[styles.button, { paddingVertical: "3%" }]}
                onPress={() => {
                  setIsLoading(true);
                  setVideo(item);
                }}>
                <Text style={styles.buttonTxt}>{item.name}</Text>
              </Pressable>
            )}
          />
        ) : (
          <ActivityIndicator size={35} color="#600" />
        )}
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
    </HomeBG>
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
    padding: 20,
    justifyContent: "space-around",
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
    elevation: 10,
    maxWidth: 500,
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
