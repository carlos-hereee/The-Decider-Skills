// import { Route, Switch } from "react-router-dom";
// import handbook from "./data.json";
// import Skills from "./pages/Skills";
// import Definition from "./components/Definition";
// import Header from "./pages/Header";
// import Footer from "./pages/Footer";
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./pages/Homepage";
import { styles } from "./stylesheets";
import Handbook from "./pages/Handbook";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.app}>
      <Homepage />
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Handbook" component={Handbook} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
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
