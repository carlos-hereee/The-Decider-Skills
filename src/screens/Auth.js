import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { useFonts, Amaranth_700Bold } from "@expo-google-fonts/amaranth";
import HomeBG from "../components/HomeBG";
import Login from "../components/Login";
import { Text } from "react-native-elements";
import { navigate } from "../utils/RootNavigation";
import { globalStyles } from "../styles";
import { HandbookContext } from "../utils/Context";
import { auth } from "../utils/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const Auth = () => {
  let [fontsLoaded] = useFonts({ Amaranth_700Bold });
  const { client, liveUser, getData } = useContext(HandbookContext);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (client.rememberMe) {
      navigate("Home");
    }
  }, [client.rememberMe]);

  useEffect(() => {
    setLoading(true);
    if (user?.uid) {
      liveUser(user.uid);
      getData(user.uid);
    }
    setLoading(false);
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={35} color="#600" />
      </View>
    );
  }
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
          <Login />
          <Pressable onPress={() => navigate("Register")}>
            <Text
              style={{
                textAlign: "center",
                color: "blue",
                textDecorationLine: "underline",
                marginTop: 10,
              }}>
              Create an account?
            </Text>
          </Pressable>
          <Pressable onPress={() => navigate("ForgotPassword")}>
            <Text
              style={{
                textAlign: "center",
                color: "blue",
                textDecorationLine: "underline",
                marginTop: 10,
              }}>
              Forgot Password?
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
    padding: 10,
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
