import React from "react";
import { Image } from "react-native";

export default function AppIcon({ name, size }) {
  const source = {
    backarrow: require("../../assets/backarrow.png"),
    bars: require("../../assets/bars.png"),
    close: require("../../assets/close.png"),
  };
  return <Image source={source[name]} resizeMode="contain" style={size} />;
}
