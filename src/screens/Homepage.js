import React, { useContext } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Text } from "react-native-elements";
import { navigate } from "../utils/RootNavigation";
import { Video } from "expo-av";
import HomeBG from "../components/HomeBG";
import { globalStyles } from "../styles";
import introVideos from "../utils/intro.json";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import VideoPlayer from "../components/VideoPlayer";
import { HandbookContext } from "../utils/Context";

const Homepage = () => {
  const { makeActive, active, resetActive } = useContext(HandbookContext);
  const handlePress = (skills, data) => {
    makeActive(skills, data);
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
              onPress={() => handlePress(introVideos, item)}>
              <Text style={styles.buttonTxt}>{item.name}</Text>
            </Pressable>
          </View>
        )}
      />
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
        <Text style={{ textAlign: "center" }}>{active.definition} </Text>
        {active.key ? (
          <>
            <VideoPlayer />
            <Pressable
              onPress={() => resetActive()}
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
          </>
        ) : (
          <Intro />
        )}
      </View>
    </HomeBG>
  );
};
export default Homepage;

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
