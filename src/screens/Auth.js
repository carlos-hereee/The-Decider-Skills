import React, { useContext, useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import HomeBG from "../components/HomeBG";
import Login from "../components/Login";
import Register from "../components/Register";
import { HandbookContext } from "../utils/Context";
import Homepage from "./Homepage";
import { Text } from "react-native-elements";

const Auth = () => {
  const { client } = useContext(HandbookContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [fontsLoaded] = useFonts({ Amaranth_700Bold });
  return client.uid ? (
    <Homepage />
  ) : (
    <HomeBG>
      <View style={[styles.container]}>
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
  cardHeading: {
    textAlign: "center",
    fontFamily: "Amaranth_700Bold",
    color: "#00122C",
  },
});
