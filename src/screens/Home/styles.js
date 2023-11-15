import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 32
  },
  floatingContainer: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 32,
    alignSelf: "center"
  }
})