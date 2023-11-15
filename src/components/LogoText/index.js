import React from "react";
import { Image } from "react-native";

export default function LogoText() {
  return (
    <Image
      source={require("../../assets/logos/logoText.png")}
      style={{ height: 128, width: 128 }}
      resizeMode="contain"
    />
  );
}