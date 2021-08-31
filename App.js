// import { Route, Switch } from "react-router-dom";
// import handbook from "./data.json";
// import Skills from "./pages/Skills";
// import Definition from "./components/Definition";
// import Header from "./pages/Header";
// import Footer from "./pages/Footer";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import Homepage from "./pages/Homepage";
import { styles } from "./stylesheets";

export default function App() {
  return (
    <View style={styles.app}>
      <Homepage />
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
