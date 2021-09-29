import React, { useState, useRef, useContext, useEffect } from "react";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { HandbookContext } from "../utils/Context";
import { navigate } from "../utils/RootNavigation";
import { getVideoUrl } from "../utils/firebase.config";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const { badgeToClaim, earnedBadges, active } = useContext(HandbookContext);
  const [status, setStatus] = useState();
  const [quality, setQuality] = useState("720");
  const [videoURI, setVideoURI] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (active.key) {
      setVideoURI("");
      getVideoUrl(active[quality]).then((url) => {
        setVideoURI(url);
      });
    }
  }, [active.key]);

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
    setStatus(e);
    if (e.playableDurationMillis <= e.positionMillis) {
      // video ends and badge has not been earned
      if (!earnedBadges.filter((data) => data.key === vid.key).length) {
        badgeToClaim(video);
        navigate("ClaimBadge");
      }
    }
  };

  const videoStyle = {
    width: isLoading ? 0 : Platform.OS === "web" ? "40%" : 200,
    height: isLoading ? 0 : 150,
  };
  return (
    <Pressable
      onPress={() =>
        status.isPlaying
          ? videoRef.current.pauseAsync()
          : videoRef.current.playAsync()
      }>
      {videoURI ? (
        <>
          {isLoading && <ActivityIndicator size="large" color="#600" />}
          <Video
            ref={videoRef}
            source={{ uri: videoURI }}
            useNativeControls
            style={[videoStyle, styles.video]}
            resizeMode="contain"
            onPlaybackStatusUpdate={(stat) => handlePlayback(stat)}
            onFullscreenUpdate={handleFullscreen}
            posterSource={Platform.OS === "ios" && { uri: active.thumbnail }}
            onLoadStart={() => setIsLoading(true)}
            onLoad={() => setIsLoading(false)}
          />
        </>
      ) : (
        <ActivityIndicator size="large" color="#600" />
      )}
    </Pressable>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    ...Platform.select({
      web: {
        marginHorizontal: "auto",
      },
    }),
  },
});
