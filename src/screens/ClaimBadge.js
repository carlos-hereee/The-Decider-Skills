import React, { useContext } from "react";
import { Pressable, StyleSheet, View, Platform } from "react-native";
import Badge from "../components/Badge";
import { globalStyles } from "../styles";
import { HandbookContext } from "../utils/Context";
import { Text } from "react-native-elements";
import { auth } from "../utils/firebase.config";

const ClaimBadge = () => {
  const { claimBadge, queuedSkillForBadge } = useContext(HandbookContext);
  return (
    <View style={styles.container}>
      <Text h4>Congratulations!</Text>
      <Text h4>You earned the {queuedSkillForBadge.name} Badge</Text>
      <Badge
        data={{
          src: queuedSkillForBadge.thumbnail,
          iconSize: 200,
          backgroundSize: 300,
        }}
      />
      <Pressable
        style={[styles.button, globalStyles.shadow]}
        onPress={() => claimBadge(queuedSkillForBadge, auth.currentUser)}>
        <Text style={{ color: "#ffffff", paddingHorizontal: 20 }}>CLAIM</Text>
      </Pressable>
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
  button: {
    backgroundColor: "#00A89E",
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      web: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      default: {
        elevation: 5,
      },
    }),
  },
});
