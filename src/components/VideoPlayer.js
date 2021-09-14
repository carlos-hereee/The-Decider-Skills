import React, { useState, useRef, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import videoURI from "./videoURI";
import { HandbookContext } from "../utils/Context";

const VideoPlayer = ({ vid }) => {
  const videoRef = useRef(null);
  const { claimBadge } = useContext(HandbookContext);
  const [status, setStatus] = useState({});
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
    }
  };

  const handlePlayback = async (e) => {
    if (e.playableDurationMillis <= e.positionMillis) {
      claimBadge(vid);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={videoURI[vid.videoName][quality]}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls
        onPlaybackStatusUpdate={(stat) => handlePlayback(stat)}
        onFullscreenUpdate={handleFullscreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 600,
    marginTop: 20,
    paddingBottom: 20,
  },
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
