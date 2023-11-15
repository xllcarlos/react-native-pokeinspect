import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const size = (width - 64) / 3; // (width - total padding) / photos by line

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width : size,
    height: size,
  }
});