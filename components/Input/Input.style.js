import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 20,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 25,
    fontSize: 30,
  },
});
