import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import TextFormInput from '../../../components/FormInputs/TextI';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const LoginScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  // const userProfile = useSelector((state: AppState) => state.default);

  const [email, setEmail] = useState('');

  const onChangeInputHandler = (
    propertyName: string,
    propertyValue: string
  ) => {
    if (propertyName === 'email') {
      setEmail(propertyValue);
    }
    console.log(email);
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
      </View>
    </View>
  );
};

export default LoginScreen;
