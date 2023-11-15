import React, { useContext, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import DataContextProvider, { DataContext } from "./contexts/dataContext";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <DataContextProvider>
        <Routes />
        <StatusBar style="auto" />
      </DataContextProvider>
    </NavigationContainer>
  );
}