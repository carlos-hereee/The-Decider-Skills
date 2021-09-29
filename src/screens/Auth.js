import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import HomeBG from "../components/HomeBG";
import Login from "../components/Login";
import Register from "../components/Register";
import { HandbookContext } from "../utils/Context";
import { Text } from "react-native-elements";
import { navigate } from "../utils/RootNavigation";
import { globalStyles } from "../styles";

const Auth = () => {
  const { client } = useContext(HandbookContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [fontsLoaded] = useFonts({ Amaranth_700Bold });
  useEffect(() => {
    if (client.uid) {
      navigate("Home");
    }
  }, [client.uid]);

  return (
    <HomeBG>
      <View style={[styles.container, globalStyles.shadow]}>
        {fontsLoaded && (
          <View>
            <Text h2 style={styles.cardHeading}>
              The Decider
            </Text>
            <Text h2 style={styles.cardHeading}>
              Skills
            </Text>
          </View>
        )}
        <View>
          {isLoggedIn ? <Register /> : <Login />}
          <Pressable onPress={() => setIsLoggedIn(!isLoggedIn)}>
            <Text
              style={{
                textAlign: "center",
                color: "blue",
                textDecorationLine: "underline",
                marginTop: 20,
              }}>
              {isLoggedIn
                ? "Don't have an account? "
                : "Already have an account?"}
            </Text>
          </Pressable>
        </View>
      </View>
    </HomeBG>
  );
};
export default Auth;
const styles = StyleSheet.create({
  container: {
    width: "80%",
    maxWidth: 500,
    padding: "5%",
    justifyContent: "space-around",
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
  },
  cardHeading: {
    textAlign: "center",
    fontFamily: "Amaranth_700Bold",
    color: "#00122C",
  },
});
