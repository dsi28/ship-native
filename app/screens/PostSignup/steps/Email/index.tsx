import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../../../../components/buttons/NextButton';
import NavigationService from '../../../../navigation/NavigationService';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import { AppState } from '../../../../redux/store/configureStore';
import BirthdayInput from '../BirthdayInput';
import styles from './styles';

// interface NameInputProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const EmailInput: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-useless-escape
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [emailInput, setEmailInput] = useState(userPostProfile.email);
  const [isValidated, setIsValidated] = useState(reg.test(emailInput));

  const validateEmail = (text: string) => {
    console.log(text);
    console.log(typeof text);
    // https://stackoverflow.com/questions/43676695/email-validation-react-native-returning-the-result-as-invalid-for-all-the-e

    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setEmailInput(text);
      setIsValidated(false);
    } else {
      setEmailInput(text);
      console.log('Email is Correct');
      setIsValidated(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>My email is</Text>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <TextInput
                style={styles.screenInput}
                placeholder="email.."
                value={emailInput.toString()}
                onChangeText={(text: string) => {
                  console.log(text);
                  validateEmail(text);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              NavigationService.navigate('Birthday', BirthdayInput);
              dispatch(
                setProfileUser({ ...userPostProfile, email: emailInput })
              );
            }}
            isDisabled={!isValidated}
          />
        </View>
      </View>
    </View>
  );
};
export default EmailInput;
