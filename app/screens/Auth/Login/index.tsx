import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TextFormInput from '../../../components/FormInputs/TextI';
import NavigationLinkComponent from '../../../components/navigationLink';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const LoginScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  // const userProfile = useSelector((state: AppState) => state.default);

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
            textColor="black"
            linkText="Create Account"
          />
        </View>
        <View>
          <Text style={styles.headerText}>Log In</Text>
        </View>
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
        <View>
          <NavigationLinkComponent
            navigateTo="Forgot Password"
            textColor="black"
            linkText="Forgot Password"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
