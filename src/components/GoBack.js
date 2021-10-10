import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, View, Dimensions, Text } from "react-native";
import {
  faArrowLeft,
  faBars,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { navigate, navigationRef } from "../utils/RootNavigation";
import { HandbookContext } from "../utils/Context";
import { globalStyles } from "../styles";
import { useRoute } from "@react-navigation/core";
import { auth } from "../utils/firebase.config";

const { width, height } = Dimensions.get("window");
export default function GoBack() {
  const { resetActive } = useContext(HandbookContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const screenName = useRoute().name;

  const handlePress = () => {
    resetActive();
    if (screenName === "Handbook") {
      navigate("Home");
    } else {
      navigationRef.goBack();
    }
  };
  const signOut = () => {
    auth.signOut();
    navigate("Home");
  };
  return (
    <>
      <View
        style={[
          globalStyles.shadow,
          screenName === "Auth" ? styles.authContainer : styles.container,
        ]}>
        <Pressable onPress={() => handlePress()}>
          <FontAwesomeIcon icon={faArrowLeft} color="#2185d6" size={45} />
        </Pressable>
        {auth.currentUser ? (
          // <View style={styles.hamburgerMenuToggle}>
          <Pressable onPress={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <FontAwesomeIcon icon={faTimesCircle} color="#2185d6" size={40} />
            ) : (
              <FontAwesomeIcon icon={faBars} color="#2185d6" size={40} />
            )}
          </Pressable>
        ) : // </View>
        null}
      </View>
      {toggleMenu ? (
        <View style={[globalStyles.shadow, styles.hamburgerMenu]}>
          <Pressable style={styles.menuItem} onPress={() => handlePress()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#2185d6" />
            <Text style={{ marginLeft: 5 }}>Go Back</Text>
          </Pressable>
          <Pressable style={styles.menuItem} onPress={() => signOut()}>
            <Text>Sign Out</Text>
          </Pressable>
        </View>
      ) : null}
    </>
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
  menuItem: {
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 5,
  },
  authContainer: {
    padding: 10,
  },
  hamburgerMenu: {
    borderWidth: 2,
    borderColor: "#CBE9ED",
    backgroundColor: "#ffffff",
    width: width * 0.5,
    position: "absolute",
    top: "13%",
    right: "5%",
    zIndex: 2,
    padding: 10,
  },
});
