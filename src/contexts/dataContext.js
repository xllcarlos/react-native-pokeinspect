import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { createContext, useState } from "react";

export const DataContext = createContext({});

export default function DataContextProvider({ children }) {

  /**
   * @constant {string} pokemonName => state para o nome do pokemon.
   * @constant {object} pokemonData => state para o objeto do pokemon solicitado.
   * @constant {boolean} loading => state para condição do carregamento.
   * @constant {boolean} connection => state para condição da conexão.
   */

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(false);
  const [connection, setConnection] = useState(true);

  const navigation = useNavigation();

  function handleSetLoading(loading) {
    /**
     * @param {boolean} loading recebe o valor a ser inserido no state loading.
     */

    setLoading(loading);
  }

  function handleSetPokemonName(pokemonName) {
    /**
     * @param {string} pokemonName recebe o valor a ser inserido no state pokemonName.
     */

    setPokemonName(pokemonName);
  }

  function handleSetPokemonData(pokemonData) {
    /**
     * @param {object} pokemonData recebe o valor a ser inserido no state pokemonData.
     */

    setPokemonData(pokemonData);
  }

  function handleSetConnection(connection) {
    /**
     * @param {boolean} connection recebe o valor a ser inserido no state connection.
     */
    setConnection(connection)
  }

  function getPokemonData() {

    /** Função para buscar as informações do pokemon inserido*/

    const options = {
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      headers: {

      },
      method: "GET"
    }

    handleSetLoading(true);

    axios(options)
      .then(data => {
        if (!!data.data.id) {
          /** Se o pokemon for encontrado */
          setPokemonData(data.data);
          navigation.navigate("Details");
          handleSetLoading(false);

        } else {
          /** Se o pokemon não for encontrado */
          handleSetLoading(false);
          handleSetPokemonData({});
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  const dataValue = {
    connection,
    pokemonName,
    pokemonData,
    loading,
    handleSetPokemonName,
    handleSetPokemonData,
    getPokemonData,
    handleSetConnection
  };

  return (
    <DataContext.Provider value={dataValue}>
      {children}
    </DataContext.Provider>
  )
}