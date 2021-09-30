import React, { useState, useRef, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Text } from "react-native-elements";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import AppLoading from "expo-app-loading";
import { navigate } from "../utils/RootNavigation";
import { Video } from "expo-av";
import HomeBG from "../components/HomeBG";
import { getVideoUrl } from "../utils/firebase.config";
import { globalStyles } from "../styles";

const introVideos = [
  {
    key: "intro",
    name: "Introduction",
    original:
      "gs://the-decider-skills.appspot.com/skills/TheDeciderIntroduction/TheDeciderIntroduction-Original.mp4",
    360: "gs://the-decider-skills.appspot.com/skills/TheDeciderIntroduction/TheDeciderIntroduction-360.mp4",
    540: "gs://the-decider-skills.appspot.com/skills/TheDeciderIntroduction/TheDeciderIntroduction-540.mp4",
    720: "gs://the-decider-skills.appspot.com/skills/TheDeciderIntroduction/TheDeciderIntroduction-720.mp4",
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
  const [videoURI, setVideoURI] = useState("");
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [quality, setQuality] = useState("720");

  useEffect(() => {
    if (status?.isLoaded) {
      setIsLoading(false);
      videoURI && videoRef.current.presentFullscreenPlayer();
    }
    if (status?.durationMillis <= status?.positionMillis) {
      videoRef.current.dismissFullscreenPlayer();
    }
  }, [status?.isLoaded, status?.positionMillis]);

  const handleFullscreen = async ({ fullscreenUpdate }) => {
    if (fullscreenUpdate === 0) {
      // enter full screen
      videoRef.current.presentFullscreenPlayer();
      videoRef.current.playAsync();
    }
    if (fullscreenUpdate === 2) {
      // exit full screen
      videoRef.current.dismissFullscreenPlayer();
      videoRef.current.pauseAsync();
      setVideo({});
    }
  };

  useEffect(() => {
    if (video.key) {
      getVideoUrl(video[quality]).then((url) => setVideoURI(url));
    }
  }, [video.key]);
  return fontsLoaded ? (
    <HomeBG>
      <View style={[styles.container, globalStyles.shadow]}>
        <Video
          ref={videoRef}
          resizeMode="contain"
          source={{ uri: videoURI }}
          style={{ width: 0, height: 0 }}
          onPlaybackStatusUpdate={(stat) => setStatus(stat)}
          onFullscreenUpdate={handleFullscreen}
        />
        <Text h2 style={styles.cardHeading}>
          The Decider
        </Text>
        <Text h2 style={styles.cardHeading}>
          Skills
        </Text>
        <View style={{ flexGrow: 1, justifyContent: "center" }}>
          <Text style={{ textAlign: "center" }}>
            Welcome to The Decider Skills app. Please watch the videos for an
            overview of The Decider, CBT and The FIZZ, or dive straight into the
            Skills reminders.
          </Text>
        </View>
        {!isLoading ? (
          <FlatList
            data={introVideos}
            contentContainerStyle={{ flexGrow: 1, marginVertical: 10 }}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  globalStyles.shadow,
                  { paddingVertical: "3%" },
                ]}
                onPress={() => {
                  setVideo(item);
                  setIsLoading(true);
                }}>
                <Text h4 style={styles.buttonTxt}>
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        ) : (
          <ActivityIndicator size={35} color="#600" />
        )}
        <View style={{ flexGrow: 1, justifyContent: "center" }}>
          <Text style={{ textAlign: "center", marginVertical: 5 }}>
            What brings you here today?
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Pressable
            onPress={() => navigate("TheFizz")}
            style={[styles.button, globalStyles.shadow]}>
            <Text h4 style={[styles.buttonTxt, { padding: 5 }]}>
              12 Skills
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigate("Handbook")}
            style={[styles.button, globalStyles.shadow]}>
            <Text h4 style={[styles.buttonTxt, { padding: 5 }]}>
              32 Skills
            </Text>
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
    width: "80%",
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
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
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#00A89E",
    borderRadius: 4,
    marginHorizontal: 5,
  },
  buttonTxt: {
    textAlign: "center",
    color: "#ffffff",
  },
});
