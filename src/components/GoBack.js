import React, { useContext } from "react";
import { Pressable, StyleSheet, View, Dimensions } from "react-native";
import { navigationRef } from "../utils/RootNavigation";
import { HandbookContext } from "../utils/Context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const { width, height } = Dimensions.get("window");
export default function GoBack() {
  const { resetActive } = useContext(HandbookContext);
  const handlePress = () => {
    resetActive();
    navigationRef.goBack();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => handlePress()}>
        <FontAwesomeIcon icon={faArrowLeft} size={30} color="#4583B6" />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: width,
    height: height * 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
