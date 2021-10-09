import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, View, Dimensions, Text } from "react-native";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
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
      </View>
      {auth.currentUser ? (
        <View style={styles.hamburgerMenuToggle}>
          <Pressable onPress={() => setToggleMenu(!toggleMenu)}>
            <FontAwesomeIcon icon={faBars} color="#2185d6" size={40} />
          </Pressable>
        </View>
      ) : null}
      {toggleMenu ? (
        <View style={[globalStyles.shadow, styles.hamburgerMenu]}>
          <Pressable onPress={() => signOut()}>
            <Text>Sign Out</Text>
          </Pressable>
        </View>
      ) : null}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.05,
    marginBottom: height * 0.01,
    paddingHorizontal: 20,
  },
  authContainer: {
    padding: 10,
  },
  hamburgerMenuToggle: {
    position: "absolute",
    top: "5%",
    right: "5%",
  },
  hamburgerMenu: {
    backgroundColor: "#ffffff",
    width: width * 0.3,
    position: "absolute",
    top: "13%",
    right: "5%",
    zIndex: 2,
    padding: 10,
  },
});
