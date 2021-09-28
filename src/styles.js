import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  button: {
    fontFamily: "Amaranth_700Bold",
    marginTop: "auto",
    padding: 5,
    margin: 5,
    backgroundColor: "#00A89E",
    borderRadius: 4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
