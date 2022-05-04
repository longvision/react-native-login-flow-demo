//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Button,
} from 'react-native';
import CustomButton from '../../components/Button';
import TextField from '../../components/Input';
import AuthApi from '../../api/auth-api';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../hooks/use-auth.js';
import Keyboard from '../../hoc/keyboard.js';

const Login = ({navigation, ...props}) => {
  const {login} = useAuth();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/login.jpeg')}
        style={styles.image}>
        <Keyboard style={styles.keyboard}>
          <View style={styles.box}>
            <Text style={styles.title}>Login</Text>

            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={Yup.object({
                password: Yup.string()
                  .min(8, 'Password is too short (min. 8 char)')

                  .required('Required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
              })}
              onSubmit={async values => {
                try {
                  login(values.email, values.password);
                } catch (err) {
                  console.error(err);
                }
              }}>
              {({handleChange, handleBlur, handleSubmit, errors, values}) => (
                <View style={styles.form}>
                  <TextField
                    type="email-address"
                    placeholder="Email"
                    label="Email"
                    onBlur={handleBlur('email')}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    error={errors.email}
                  />
                  <TextField
                    type="default"
                    placeholder="Password"
                    label="Password"
                    autocomplete={false}
                    value={values.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    error={errors.password}
                  />

                  <CustomButton
                    title="Login"
                    accessibilityLabel={'Login'}
                    onPress={handleSubmit}
                  />
                  <Text
                    style={styles.register}
                    onPress={() => navigation.navigate('Register')}>
                    Create an Account?
                  </Text>
                </View>
              )}
            </Formik>
          </View>
        </Keyboard>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    // height: "100%",
    // backgroundColor: "#2c3e50",
  },
  box: {
    width: '100%',
    paddingTop: 5,
    height: '70%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 25,
    marginVertical: '40%',
    opacity: 0.9,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  keyboard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  form: {
    width: '100%',

    height: '100%',

    borderRadius: 25,
    margin: 10,
    opacity: 0.9,

    alignItems: 'center',
  },
  image: {
    flex: 1,

    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  register: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
    textAlign: 'left',
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: "70%",
    marginRight: '50%',
    marginBottom: '0%',
    // backgroundColor: "#000000c0",
  },
  boldText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    // backgroundColor: "#000000c0",
  },
  text: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
    textAlign: 'left',
    // backgroundColor: "#000000c0",
  },
});

//make this component available to the app
export default Login;
