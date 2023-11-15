import React, { useContext } from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import { DataContext } from "../../contexts/dataContext";

export default function SearchBar() {

  const { pokemonName, handleSetPokemonName } = useContext(DataContext);

  return (
    <TextInput
      style={styles.input}
      onChangeText={value => handleSetPokemonName(value)}
      placeholder="Type pokemon name..."
      value={pokemonName}
    />
  );
}