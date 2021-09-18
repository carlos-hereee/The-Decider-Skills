import React, { useState, useRef, useContext } from "react";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import videoURI from "./videoURI";
import { Dimensions } from "react-native";
import { HandbookContext } from "../utils/Context";
import { navigate } from "../utils/RootNavigation";

const VideoPlayer = ({ vid }) => {
  const videoRef = useRef(null);
  const { badgeToClaim, earnedBadges } = useContext(HandbookContext);
  const { width } = Dimensions.get("window");

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
    <Video
      ref={videoRef}
      style={{ flex: 1, width: width * 0.6 }}
      source={videoURI[vid.videoName][quality]}
      resizeMode="contain"
      useNativeControls
      onPlaybackStatusUpdate={(stat) => handlePlayback(stat)}
      onFullscreenUpdate={handleFullscreen}
    />
  );
};

export default VideoPlayer;
