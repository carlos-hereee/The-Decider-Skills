import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { StatusBar } from "expo-status-bar";
import { HandbookState } from "./src/utils/Context.js";
import Homepage from "./src/pages/Homepage";
import Handbook from "./src/pages/Handbook";
import Footer from "./src/components/Footer";

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
