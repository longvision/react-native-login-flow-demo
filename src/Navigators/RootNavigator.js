//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import HomeNavigator from './HomeNavigator/index.js';
import AuthNavigator from './AuthNavigator/index.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthConsumer} from '../contexts/jwt-context.js';
import {useAuth} from '../hooks/use-auth.js';

// create a component
const AppNavigator = ({navigation}) => {
  const auth = useAuth();
  // React.useEffect(() => {}, [auth.isAuthenticated]);
  return (
    <NavigationContainer>
      {auth.isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default AppNavigator;
