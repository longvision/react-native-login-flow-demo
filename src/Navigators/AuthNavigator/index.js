//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from '../../Auth/Login/index.js';
import Register from '../../Auth/Register/index.js';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Auth = createNativeStackNavigator();

const AuthNavigator = ({navigation}) => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        <Auth.Screen
          name="Register"
          options={{title: ''}}
          component={Register}
        />
        <Auth.Screen name="Login" options={{title: ''}} component={Login} />
      </>
    </Auth.Navigator>
  );
};

//make this component available to the app
export default AuthNavigator;
