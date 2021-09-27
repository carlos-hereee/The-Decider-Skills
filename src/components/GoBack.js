import React, { useContext } from "react";
import { StyleSheet, Dimensions, Pressable } from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { navigationRef } from "../utils/RootNavigation";
import { HandbookContext } from "../utils/Context";

export default function GoBack() {
  const { resetActive } = useContext(HandbookContext);
  const { width, height } = Dimensions.get("window");

  const handlePress = () => {
    resetActive();
    navigationRef.goBack();
  };
  return (
    <Pressable
      onPress={() => handlePress()}
      style={{ paddingTop: height / 40 }}>
      <FontAwesomeIcon icon={faArrowLeft} color="#2185d6" size={45} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
