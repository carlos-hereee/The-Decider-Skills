import React, { useState, useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

const VideoPlayer = ({}) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
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
        source={require(`assets/skills/theFizz/TheFIZZ-original.mp4`)}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls
        onPlaybackStatusUpdate={(stat) => setStatus(() => stat)}
        onFullscreenUpdate={handleFullscreen}
      />
      <View style={styles.btn}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() => (status.isPlaying ? handlePause() : handlePlay())}
        />
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
