import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthProvider, AuthConsumer} from './contexts/jwt-context.js';

import AppNavigator from './Navigators/RootNavigator.js';

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
