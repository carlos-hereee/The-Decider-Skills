import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { StatusBar } from "expo-status-bar";
import { HandbookState } from "./src/utils/Context.js";
import { navigationRef } from "./src/utils/RootNavigation.js";
import Homepage from "./src/pages/Homepage";
import Handbook from "./src/pages/Handbook";
import TheFizz from "./src/pages/TheFizz";
import ClaimBadge from "./src/pages/ClaimBadge";
import Footer from "./src/components/Footer";
import Auth from "./src/pages/Auth";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isReady, setReady] = useState(false);
  const [error, setError] = useState();
  const _cacheResourcesAsync = async () => {
    const images = [require("./assets/post-it-splash.png")];
    const cacheImages = images.map((img) => {
      return Asset.fromModule(img).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  return isReady ? (
    <NavigationContainer ref={navigationRef}>
      <HandbookState>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Handbook" component={Handbook} />
          <Stack.Screen name="TheFizz" component={TheFizz} />
          <Stack.Screen name="ClaimBadge" component={ClaimBadge} />
        </Stack.Navigator>
        <StatusBar style="auto" />
        <Footer />
      </HandbookState>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setReady(true)}
      onError={(e) => setError(e)}
    />
  );
}
