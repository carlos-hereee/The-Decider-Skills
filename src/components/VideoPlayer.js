import React, { useState, useRef, useContext, useEffect } from "react";
import { Video } from "expo-av";
import { ActivityIndicator, Platform, Pressable } from "react-native";
import { HandbookContext } from "../utils/Context";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const { active } = useContext(HandbookContext);
  const [status, setStatus] = useState();
  const [quality, setQuality] = useState("720");
  const [videoURI, setVideoURI] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (active.key) {
      setVideoURI(
        `https://the-decider-skills-db.herokuapp.com/video?name=${active.key}&quality=${quality}`
      );
    }
  }, [active.key]);
  const handleFullscreen = async ({ fullscreenUpdate }) => {
    if (fullscreenUpdate === 0) {
      // enter full screen
      videoRef.current.playAsync();
    }
    if (fullscreenUpdate === 2) {
      // exit full screen
      videoRef.current.pauseAsync();
    }
  };
  return (
    <Pressable
      onPress={() =>
        status.isPlaying
          ? videoRef.current.pauseAsync()
          : videoRef.current.playAsync()
      }>
      {isLoading && <ActivityIndicator size="large" color="#600" />}
      <Video
        ref={videoRef}
        source={{ uri: videoURI }}
        useNativeControls
        style={{
          minWidth: 250,
          width: "100%",
          maxWidth: 600,
          height: isLoading ? 0 : 150,
        }}
        resizeMode="contain"
        onPlaybackStatusUpdate={(stat) => setStatus(stat)}
        onFullscreenUpdate={handleFullscreen}
        posterSource={Platform.OS === "ios" && { uri: active.thumbnail }}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
      />
    </Pressable>
  );
};

export default VideoPlayer;
