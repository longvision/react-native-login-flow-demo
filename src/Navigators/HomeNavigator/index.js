//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Home from "../../Home/index.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const HomeStack = createNativeStackNavigator();

const HomeNavigator = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" options={{ title: "" }} component={Home} />
    </HomeStack.Navigator>
  );
};

//make this component available to the app
export default HomeNavigator;
