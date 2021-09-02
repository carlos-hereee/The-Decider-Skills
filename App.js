// import { Route, Switch } from "react-router-dom";
// import handbook from "./data.json";
// import Skills from "./pages/Skills";
// import Definition from "./components/Definition";
// import Header from "./pages/Header";
import Footer from "./pages/Footer";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./pages/Homepage";
import Handbook from "./pages/Handbook";
import { HandbookState } from "./utlis/Context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HandbookState>
        <Stack.Navigator
          initialRouteName="Handbook"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Handbook" component={Handbook} />
        </Stack.Navigator>
        <Footer />
      </HandbookState>
    </NavigationContainer>
  );
}

// <div className="container">
// <div className="container">
/* <Header />
 */
/* <Switch>
    <Route path="/" exact>
      <Homepage />
    </Route>
    <Route path="/skill">
      <Skills data={handbook} />
    </Route>
    <Route path="/:id">
      <Definition />
    </Route>
  </Switch>
  <Footer /> */
// </div>
