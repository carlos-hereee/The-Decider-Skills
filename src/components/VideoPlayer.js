import React, { useState, useRef, useContext, useEffect } from "react";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import { ActivityIndicator, Dimensions, Pressable, View } from "react-native";
import { HandbookContext } from "../utils/Context";
import { navigate } from "../utils/RootNavigation";
import { getVideoUrl } from "../utils/firebase.config";

const VideoPlayer = ({ vid }) => {
  const videoRef = useRef(null);
  const { badgeToClaim, earnedBadges } = useContext(HandbookContext);
  const { width } = Dimensions.get("window");
  const [status, setStatus] = useState();
  const [video, setVideo] = useState({ vid });
  const [quality, setQuality] = useState("original");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (vid.key !== video.key) {
      const loadVideo = async () => {
        const url = await getVideoUrl(vid[quality]);
        setVideo({ ...vid, source: { uri: url } });
      };
      loadVideo();
    }
  }, [vid.key]);
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
  return (
    <Pressable
      onPress={() =>
        status.isPlaying
          ? videoRef.current.pauseAsync()
          : videoRef.current.playAsync()
      }>
      <Video
        ref={videoRef}
        source={video.source}
        useNativeControls
        style={{ flex: 1, width: !isLoading ? 0 : width * 0.6 }}
        resizeMode="contain"
        onPlaybackStatusUpdate={(stat) => handlePlayback(stat)}
        onFullscreenUpdate={handleFullscreen}
        onLoadStart={() => setIsLoading(false)}
        onReadyForDisplay={() => setIsLoading(true)}
      />

      {!isLoading && (
        <View style={{ flex: 1, alignItems: "center", alignItems: "center" }}>
          <ActivityIndicator size={35} color="#600" />
        </View>
      )}
    </Pressable>
  );
};

export default VideoPlayer;
