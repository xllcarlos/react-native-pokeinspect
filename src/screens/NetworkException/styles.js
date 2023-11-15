import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center"
  },
  font: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold"
  },
  image: {
    height: 100,
    width: 100,
    position: "absolute",
    bottom: 32
  }
})