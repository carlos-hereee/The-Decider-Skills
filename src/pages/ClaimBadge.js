import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Badge from "../components/Badge";
import { HandbookContext } from "../utils/Context";
import { navigationRef } from "../utils/RootNavigation";

const ClaimBadge = () => {
  const { claimBadge, queuedSkillForBadge } = useContext(HandbookContext);
  const handlePress = () => {
    claimBadge(queuedSkillForBadge);
    navigationRef.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Congratulations!</Text>
      <Text style={{ fontSize: 25 }}>You earned a new Badge</Text>
      <Badge src={queuedSkillForBadge.imageUrl} />
      <Pressable style={styles.button} onPress={() => handlePress()}>
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
    elevation: 5,
  },
});
