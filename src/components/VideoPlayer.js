import React, { useState, useRef } from "react";
import { StyleSheet, View, Pressable, Image } from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import videoURI from "./videoURI";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [quality, setQuality] = useState("original");

  const handlePause = () => {
    videoRef.current.pauseAsync();
  };
  const handlePlay = async () => {
    videoRef.current.presentFullscreenPlayer();
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

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={videoURI[src][quality]}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls
        onPlaybackStatusUpdate={(stat) => setStatus(() => stat)}
        onFullscreenUpdate={handleFullscreen}
      />
      <View style={styles.btn}>
        <Pressable
          onPress={() => (status.isPlaying ? handlePause() : handlePlay())}>
          <Image
            source={
              status.isPlaying
                ? require("../../assets/media-control-pause.png")
                : require("../../assets/media-control-play.png")
            }
            resizeMode="cover"
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  video: { width: 320, height: 200, marginTop: 40 },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 40,
  },
});

export default VideoPlayer;
