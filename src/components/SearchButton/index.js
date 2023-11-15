import React, { useContext } from "react";
import { ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { DataContext } from "../../contexts/dataContext";
import colors from "../../styles/colors";

export default function SearchButton() {

  const { loading, getPokemonData } = useContext(DataContext);

  return (
    <TouchableOpacity onPress={() => getPokemonData()}>
      {
        !loading
          ? <Image
            source={require("../../assets/logos/logoIcon.png")}
            style={{ height: 48, width: 48 }}
          />
          : <ActivityIndicator animating={true} size="large" color={colors.red} />
      }
    </TouchableOpacity>
  );
}