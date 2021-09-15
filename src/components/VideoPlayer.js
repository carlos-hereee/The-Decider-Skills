import React, { useState, useRef, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import videoURI from "./videoURI";
import { HandbookContext } from "../utils/Context";
import { navigate } from "../utils/RootNavigation";

const VideoPlayer = ({ vid }) => {
  const videoRef = useRef(null);
  const { badgeToClaim, earnedBadges } = useContext(HandbookContext);
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
      // video ends and badge has not been earned
      if (!earnedBadges.includes(vid.key)) {
        badgeToClaim(vid);
        navigate("ClaimBadge");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={videoURI[vid.videoName][quality]}
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
  },
  video: {
    aspectRatio: 1,
    width: "100%",
    marginVertical: 20,
  },
});

export default VideoPlayer;
