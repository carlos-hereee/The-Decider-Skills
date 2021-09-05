import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import Homepage from "./pages/Homepage";
import Handbook from "./pages/Handbook";
import { HandbookState } from "./utlis/Context";
import Footer from "./pages/Footer";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isReady, setReady] = useState(false);
  const _cacheResourcesAsync = async () => {
    const images = [require("./assets/post-it-splash.png")];
    const cacheImages = images.map((img) => {
      return Asset.fromModule(img).downloadAsync();
    });
    return Promise.all(cacheImages);
  };
  return isReady ? (
    <NavigationContainer>
      <HandbookState>
        <Stack.Navigator
          initialRouteName="Handbook"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Handbook" component={Handbook} />
        </Stack.Navigator>
        <StatusBar style="auto" />
        <Footer />
      </HandbookState>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setReady(true)}
      onError={(e) => console.log(e)}
    />
  );
}
