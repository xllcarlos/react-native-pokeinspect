import React, { useContext } from "react";
import { View, Image } from "react-native";
import { DataContext } from "../../contexts/dataContext";
import styles from "./styles";

export default function ImageViewer() {

  const { pokemonData } = useContext(DataContext);

  return (
    <View style={styles.container}>
      {
        Object.entries(pokemonData.sprites).map(([key, value]) => {
          if (value !== null && typeof(value) === "string") {
            return(
              <Image key={key} style={styles.image} source={{uri: value}} />
            )
          }
        })
      }
    </View>
  );
}