import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import SearchBar from "../../components/SearchBar";
import LogoText from "../../components/LogoText/index";
import SearchButton from "../../components/SearchButton";

export default function Home() {

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.floatingContainer}>
        <LogoText />
        <SearchButton />
      </View>
    </View>
  );
}