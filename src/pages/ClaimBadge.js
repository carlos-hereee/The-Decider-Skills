import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Badge from "../components/Badge";

const ClaimBadge = () => {
  const skills = {
    key: "distress-2",
    step: 2,
    name: "It will pass",
    imageUrl:
      "https://www.thedecider.org.uk/media/dtcnre0a/icon-it-will-passdecider.png",
    definition:
      "Thoughts and feelings come and go. Situations change. Sometimes all we can do is keep going. It will pass.",
    videoName: "ITWILLPASS",
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Congratulations!</Text>
      <Text style={{ fontSize: 25 }}>You earned a new Badge</Text>
      <Badge src={skills.imageUrl} />
      <Button title="Claim" />
    </View>
  );
};
export default ClaimBadge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFF5FA",
  },
});
