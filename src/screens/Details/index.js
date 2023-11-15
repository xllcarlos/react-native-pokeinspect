import React, { useContext } from "react";
import { View } from "react-native";
import styles from "./styles";
import ImageViewer from "../../components/ImageViewer";
import DetailsField from "../../components/DetailsField";
import { DataContext } from "../../contexts/dataContext";

export default function Details() {

  const { pokemonData } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <ImageViewer />
      <DetailsField tittle="Id:" description={pokemonData.id} />
      <DetailsField tittle="Nome:" description={pokemonData.name} />
      <DetailsField tittle="Altura:" description={`${pokemonData.height * 10} cm`} />
      <DetailsField tittle="Peso:" description={`${pokemonData.weight / 10} kg`} />
    </View>
  )
}