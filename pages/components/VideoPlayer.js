import React, { useState, useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
// import MediaControls, { PLAYER_STATES } from "react-native-media-controls";
import { Video, AVPlaybackStatus } from "expo-av";

const VideoPlayer = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  // const videoPlayer = useRef(null);
  // const [duration, setDuration] = useState(0);
  // const [paused, setPaused] = useState(true);

  // const [currentTime, setCurrentTime] = useState(0);
  // const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  // const [isLoading, setIsLoading] = useState(true);

  // const onSeek = (seek) => {
  //   videoPlayer?.current.seek(seek);
  // };

  // const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

  // const onPaused = (newState) => {
  //   setPaused(!paused);
  //   setPlayerState(newState);
  // };

  // const onReplay = () => {
  //   videoPlayer?.current.seek(0);
  //   setCurrentTime(0);
  //   if (Platform.OS === "android") {
  //     setPlayerState(PLAYER_STATES.PAUSED);
  //     setPaused(true);
  //   } else {
  //     setPlayerState(PLAYER_STATES.PLAYING);
  //     setPaused(false);
  //   }
  // };

  // const onProgress = (data) => {
  //   if (!isLoading) {
  //     setCurrentTime(data.currentTime);
  //   }
  // };

  // const onLoad = (data) => {
  //   setDuration(Math.round(data.duration));
  //   setIsLoading(false);
  // };

  // const onLoadStart = () => setIsLoading(true);

  // const onEnd = () => {
  //   setPlayerState(PLAYER_STATES.ENDED);
  //   setCurrentTime(duration);
  // };
  const handlePause = () => {
    video.current.pauseAsync();
  };
  const handlePlay = () => {
    video.current.playAsync();
  };
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/skills/theFizz/TheFIZZ-original.mp4")}
        useNativeControls
        // rate={1.0}
        // volume={1.0}
        // isMuted={false}
        resizeMode="cover"
        // shouldPlay
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
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
