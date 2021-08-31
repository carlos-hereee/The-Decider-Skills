// import { Route, Switch } from "react-router-dom";
// import handbook from "./data.json";
// import Homepage from "./pages/Homepage";
// import Skills from "./pages/Skills";
// import Definition from "./components/Definition";
// import Header from "./pages/Header";
// import Footer from "./pages/Footer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
