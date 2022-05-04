//import liraries
import React, { Component } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const CustomButton = ({ title, accessibilityLabel, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text} accessibilityLabel={accessibilityLabel}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    borderRadius: 5,
    margin: 10,
    height: 44,
    marginTop: 25,
  },
  button: {
    height: 44,
    margin: 12,
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    color: "#000",
    textAlign: "left",
  },
});

//make this component available to the app
export default CustomButton;
