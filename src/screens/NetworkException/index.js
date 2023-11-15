import React from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";

export default function NetworkException() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Sem rede!{"\n"}Verifique seu{"\n"}acesso a internet</Text>
      <Image source={require("../assets/logos/logoText.png")} style={styles.image} resizeMode="contain"/>
      <StatusBar style="auto" />
    </View>
  );
}