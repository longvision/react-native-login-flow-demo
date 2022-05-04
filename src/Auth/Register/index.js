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
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/Button';
import TextField from '../../components/Input';
import AuthApi from '../../api/auth-api';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Keyboard from '../../hoc/keyboard.js';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/register.jpeg')}
        style={styles.image}>
        <Keyboard style={styles.keyboard}>
          <View style={styles.box}>
            <Text style={styles.title}>Sign Up</Text>

            <Formik
              initialValues={{
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .max(10, 'Must be 10 characters or less')
                  .required('Required'),
                confirmPassword: Yup.string().oneOf(
                  [Yup.ref('password'), null],
                  'Passwords must match',
                ),
                password: Yup.string()
                  .min(8, 'Password is too short (min. 8 char)')

                  .required('Required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
              })}
              onSubmit={async values => {
                await AuthApi.register(
                  values.email,
                  values.username,
                  values.password,
                );

                alert('User Created Successfully');
                navigation.navigate('Login');
              }}>
              {({handleChange, handleBlur, handleSubmit, errors, values}) => (
                <View style={styles.form}>
                  <TextField
                    type="default"
                    placeholder="Username"
                    label="Username"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    error={errors.username}
                  />
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
                  <TextField
                    type="default"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    autocomplete={false}
                    value={values.confirmPassword}
                    onBlur={handleBlur('confirmPassword')}
                    onChangeText={handleChange('confirmPassword')}
                    error={errors.confirmPassword}
                  />

                  <CustomButton
                    title="Sign Up"
                    accessibilityLabel={'Register'}
                    onPress={handleSubmit}
                  />
                  <Text
                    style={styles.login}
                    onPress={() => navigation.navigate('Login')}>
                    Already have an account?
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
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: "70%",
    marginRight: '50%',

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
  login: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
    textAlign: 'left',
  },
});

//make this component available to the app
export default Register;
