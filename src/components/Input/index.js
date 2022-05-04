//import liraries
import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

// create a component
const TextField = ({
  onChangeText,
  value,
  label,
  autocomplete,
  placeholder,
  type,
  error,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.text}>{label}</Text>
        {error ? <Text style={styles.error}> {error}</Text> : null}
      </View>
      <TextInput
        autocomplete={autocomplete}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={label === "Password" || label === "Confirm Password"}
        placeholder={placeholder}
        keyboardType={type}
        autoCapitalize="none"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    height: 40,
    width: "90%",
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
    padding: 10,
    backgroundColor: "white",

    borderRadius: 5,
  },
  error: {
    color: "red",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    marginLeft: 10,
    backgroundColor: "#000000",
  },
  text: {
    color: "white",
    fontSize: 16,

    paddingLeft: 15,
    textAlign: "left",
  },
});

//make this component available to the app
export default TextField;
