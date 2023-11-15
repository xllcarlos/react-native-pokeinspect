import React from "react";
import { View, Text } from "react-native";
import fonts from "../../styles/fonts";
import styles from "./styles";
import colors from "../../styles/colors";

export default function DetailsField({ tittle, description }) {
  return (
    <View style={styles.container}>
      <Text style={[fonts.h4, { color: colors.red, fontWeight: "bold" }]}>{tittle}</Text>
      <Text style={fonts.h4}>{description}</Text>
    </View>
  );
}