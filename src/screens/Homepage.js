import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import { Text } from "react-native-elements";
import { navigate } from "../utils/RootNavigation";
import { Video } from "expo-av";
import HomeBG from "../components/HomeBG";
import { getVideoUrl } from "../utils/firebase.config";
import { globalStyles } from "../styles";
import introVideos from "../utils/intro.json";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const { width } = Dimensions.get("window");
const Homepage = () => {
  const videoRef = useRef(null);
  const [video, setVideo] = useState({});
  const [videoURI, setVideoURI] = useState("");
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [quality, setQuality] = useState("720");

  const handleFullscreen = async ({ fullscreenUpdate }) => {
    if (fullscreenUpdate === 0) {
      // enter full screen
      videoRef.current.playAsync();
      setIsLoading(false);
    }
    if (fullscreenUpdate === 2) {
      // exit full screen
      videoRef.current.pauseAsync();
    }
  };
  useEffect(() => {
    if (video.key) {
      getVideoUrl(video[quality]).then((url) => setVideoURI(url));
    }
  }, [video.key]);
  const videoStyle = {
    width: isLoading ? 0 : Platform.OS === "web" ? width * 0.35 : width * 0.7,
    height: isLoading ? 0 : 150,
  };
  const Intro = () => (
    <View>
      <Text style={{ textAlign: "center" }}>
        The Decider Skills app helps to remind you of the skills and helps you
        put them into practice. Choose from the buttons below.
      </Text>
      <FlatList
        data={introVideos}
        contentContainerStyle={{ flexGrow: 1, marginVertical: 10 }}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 5 }}>
            <Pressable
              style={[
                styles.button,
                globalStyles.shadow,
                { paddingVertical: "3%" },
              ]}
              onPress={() => {
                setIsLoading(true);
                setVideo(item);
              }}>
              <Text style={styles.buttonTxt}>{item.name}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
  return (
    <HomeBG>
      <View style={[styles.container, globalStyles.shadow]}>
        <Text h2 style={styles.cardHeading}>
          The Decider
        </Text>
        <Text h2 style={styles.cardHeading}>
          Skills
        </Text>
        {videoURI ? (
          <View>
            <Text style={{ textAlign: "center" }}>{video.definition} </Text>
            {isLoading && <ActivityIndicator size={35} color="#600" />}
            <View style={{ alignItems: "center" }}>
              <Video
                ref={videoRef}
                resizeMode="contain"
                source={{ uri: videoURI }}
                style={videoStyle}
                useNativeControls
                onPlaybackStatusUpdate={(stat) => setStatus(stat)}
                onFullscreenUpdate={handleFullscreen}
                onLoadStart={() => setIsLoading(true)}
                onLoad={() => setIsLoading(false)}
              />
            </View>
            <Pressable
              onPress={() => {
                setVideo({});
                setVideoURI("");
              }}
              style={{
                paddingHorizontal: "auto",
                paddingVertical: 5,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}>
              <FontAwesomeIcon icon={faArrowLeft} size={30} color="#4583B6" />
              <Text style={{ paddingHorizontal: 10 }}>Go back </Text>
            </Pressable>
          </View>
        ) : (
          <Intro />
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
            <Text style={[styles.buttonTxt, { padding: 5 }]}>12 Skills</Text>
          </Pressable>
          <Pressable
            onPress={() => navigate("Handbook")}
            style={[styles.button, globalStyles.shadow]}>
            <Text style={[styles.buttonTxt, { padding: 5 }]}>32 Skills</Text>
          </Pressable>
        </View>
      </View>
    </HomeBG>
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
    color: "#00122C",
  },
  button: {
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
