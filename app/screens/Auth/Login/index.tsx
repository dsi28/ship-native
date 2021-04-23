import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import NextButton from '../../../components/buttons/NextButton';
import TextFormInput from '../../../components/FormInputs/TextI';
import NavigationLinkComponent from '../../../components/navigationLink';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeInputHandler = (
    propertyName: string,
    propertyValue: string
  ) => {
    if (propertyName === 'email') {
      setEmail(propertyValue);
    } else if (propertyName === 'password') {
      setPassword(propertyValue);
    }
    console.log(email, password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.createAccountView}>
          <NavigationLinkComponent
            navigateTo="CreateAccount"
            textColor="mediumvioletred"
            linkText="Create Account"
          />
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Log In</Text>
        </View>
        <View style={styles.contentView}>
          <View>
            <TextFormInput
              labelText="Email Address"
              placeholderText="enter your email"
              propertyName="email"
              onChangeHandler={onChangeInputHandler}
              inputValue={email}
            />
          </View>
          <View>
            <TextFormInput
              labelText="Password"
              placeholderText="enter your password"
              propertyName="password"
              onChangeHandler={onChangeInputHandler}
              inputValue={password}
            />
          </View>
          <View style={styles.forgotContainer}>
            <NavigationLinkComponent
              navigateTo="Forgot Password"
              textColor="mediumvioletred"
              linkText="Forgot Password"
            />
          </View>
        </View>
        <View style={styles.loginBtn}>
          <NextButton
            buttonText="Login"
            onPressHandler={() => {
              console.log('login btn');
              // TODO  firebase login code
              auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                  console.log('User signed in!');
                  // NavigationService.navigate('Password', PassInput);
                  // dispatch(
                  //   setProfileUser({ ...userPostProfile, email: emailInput })
                  // );
                })
                .catch((error) => {
                  if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  }
                  if (error.code === 'auth/email-already-in-use') {
                    console.log('Email & password combination is incorrect!');
                  }
                  console.error(error);
                });
            }}
            isDisabled={false}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
