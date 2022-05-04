//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const KeyboardView = ({children, ...props}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={-110}
      {...props}>
      <SafeAreaView>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default KeyboardView;
