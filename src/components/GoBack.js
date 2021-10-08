import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { navigate, navigationRef } from "../utils/RootNavigation";
import { HandbookContext } from "../utils/Context";
import { globalStyles } from "../styles";
import { useRoute } from "@react-navigation/core";

export default function GoBack() {
  const { resetActive } = useContext(HandbookContext);
  const screenName = useRoute().name;

  const handlePress = () => {
    resetActive();
    if (screenName === "Handbook") {
      navigate("Home");
    } else {
      navigationRef.goBack();
    }
  };
  return (
    <View style={[globalStyles.shadow, { marginTop: 25, marginRight: "auto" }]}>
      <Pressable onPress={() => handlePress()}>
        <FontAwesomeIcon icon={faArrowLeft} color="#2185d6" size={45} />
      </Pressable>
    </View>
  );
}
