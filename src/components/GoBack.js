import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, View, Dimensions, Text } from "react-native";
import { navigate, navigationRef } from "../utils/RootNavigation";
import { HandbookContext } from "../utils/Context";
import { globalStyles } from "../styles";
import { useRoute } from "@react-navigation/core";
import { auth } from "../utils/firebase.config";
import AppIcon from "./AppIcon";

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
        style={screenName === "Auth" ? styles.authContainer : styles.container}>
        <Pressable onPress={() => handlePress()}>
          <AppIcon name="backarrow" size={{ width: 40, height: 30 }} />
        </Pressable>
        {auth.currentUser ? (
          <Pressable onPress={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <AppIcon name="close" size={{ width: 50, height: 40 }} />
            ) : (
              <AppIcon name="bars" size={{ width: 50, height: 40 }} />
            )}
          </Pressable>
        ) : null}
      </View>
      {toggleMenu ? (
        <View style={[globalStyles.shadow, styles.hamburgerMenu]}>
          <Pressable style={styles.menuItem} onPress={() => handlePress()}>
            <AppIcon name="backarrow" size={{ width: 20, height: 20 }} />
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
