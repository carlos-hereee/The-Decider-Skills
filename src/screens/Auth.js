import React, { useContext, useState } from "react";
import { View, Text, Dimensions, StyleSheet, Pressable } from "react-native";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import HomeBG from "../components/HomeBG";
import Login from "../components/Login";
import Register from "../components/Register";
import { HandbookContext } from "../utils/Context";
import Homepage from "./Homepage";

const Auth = () => {
  const { client } = useContext(HandbookContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { fontScale } = Dimensions.get("window");
  let [fontsLoaded] = useFonts({ Amaranth_700Bold });
  return client.uid ? (
    <Homepage />
  ) : (
    <HomeBG>
      <View style={[styles.container]}>
        {fontsLoaded && (
          <View>
            <Text style={[styles.cardHeading, { fontSize: 30 / fontScale }]}>
              The Decider
            </Text>
            <Text style={[styles.cardHeading, { fontSize: 30 / fontScale }]}>
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
    elevation: 10,
  },
  cardHeading: {
    textAlign: "center",
    fontFamily: "Amaranth_700Bold",
    color: "#00122C",
  },
});
