import React, { useContext } from "react";
import { Dimensions, Pressable, View } from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { navigationRef } from "../utils/RootNavigation";
import { HandbookContext } from "../utils/Context";

const { height } = Dimensions.get("window");
export default function GoBack() {
  const { resetActive } = useContext(HandbookContext);

  const handlePress = () => {
    resetActive();
    navigationRef.goBack();
  };
  return (
    <View style={{ marginHorizontal: 10, marginTop: 20 }}>
      <Pressable
        onPress={() => handlePress()}
        style={{ paddingTop: height / 40 }}>
        <FontAwesomeIcon icon={faArrowLeft} color="#2185d6" size={45} />
      </Pressable>
    </View>
  );
}
