import { NavigationHelpersContext } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AuthApi from "../api/auth-api.js";
import CustomButton from "../components/Button/index.js";
import { useAuth } from "../hooks/use-auth.js";

const Home = ({ navigation }) => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    logout();
  };
  return (
    <View>
      <Text title="Welcome to React Native" />
      <Text style={styles.heading}>Step One</Text>
      <Text>Edit App.js to change this screen and turn it into your app.</Text>
      <Text style={styles.heading}>See Your Changes</Text>
      <Text>Press Cmd + R inside the simulator to reload your app’s code.</Text>
      <Text style={styles.heading}>Debug</Text>
      <Text>
        Press Cmd + M or Shake your device to open the React Native Debug Menu.
      </Text>
      <Text style={styles.heading}>Learn</Text>
      <Text>Read the docs to discover what to do next:</Text>
      <CustomButton title="Logout" onPress={handleLogout} />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
