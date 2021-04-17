import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import TextFormInput from '../../../components/FormInputs/TextI';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const ForgotPasswordScreen: React.FC = () => {
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
          <Pressable
            onPress={() => {
              console.log('create Account');
              NavigationService.navigate('CreateAccount');
            }}
          >
            {({ pressed }) => (
              <Text
                style={{
                  opacity: pressed ? 0.8 : 1,
                  color: 'black',
                  fontSize: 20
                }}
              >
                Create Account
              </Text>
            )}
          </Pressable>
        </View>
        <View>
          <Text style={styles.headerText}>Forgot</Text>
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
          <Pressable
            onPress={() => {
              console.log('create Account');
              NavigationService.navigate('CreateAccount');
            }}
          >
            {({ pressed }) => (
              <Text
                style={{
                  opacity: pressed ? 0.8 : 1,
                  color: 'black',
                  fontSize: 20
                }}
              >
                Forgot Password
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
