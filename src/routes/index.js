import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import colors from "../styles/colors";
import Details from "../screens/Details";

const StackNavigator = createNativeStackNavigator();

export default function Routes() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.white
          }
        }} />
        <StackNavigator.Screen
        name="Details"
        component={Details}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.white
          }
        }} />
    </StackNavigator.Navigator>
  )
}