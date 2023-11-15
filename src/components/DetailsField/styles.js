import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 24,
    paddingHorizontal: 24,
    marginVertical: 5
  }
});