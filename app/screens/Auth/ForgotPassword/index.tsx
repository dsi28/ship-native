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

const ForgotPasswordScreen: React.FC = () => {
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
          <NavigationLinkComponent
            navigateTo="Login"
            textColor="mediumvioletred"
            linkText="Log In"
          />
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Forgot password</Text>
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeaderText}>
            Please enter your email address to receive your verification code
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <TextFormInput
            labelText="Email Address"
            placeholderText=""
            propertyName="email"
            onChangeHandler={onChangeInputHandler}
            inputValue={email}
          />
        </View>
        <View style={styles.loginBtn}>
          <NextButton
            buttonText="Reset Password"
            onPressHandler={() => {
              console.log('password reset');
              // TODO  firebase password reset code
            }}
            isDisabled={false}
          />
        </View>
      </View>
    </View>
  );
};
export default ForgotPasswordScreen;
