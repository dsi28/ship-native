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

const PassInput: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.profile);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-useless-escape
  // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // eslint-disable-next-line no-useless-escape
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const [passInput, setPassInput] = useState(userPostProfile.password || '');
  const [confirmInput, setConfirmInput] = useState(
    userPostProfile.password || ''
  );
  const [isValidated, setIsValidated] = useState(reg.test(passInput));
  const [isMatch, setIsMatch] = useState(
    passInput !== '' && passInput === confirmInput
  );

  const validatePass = (text: string) => {
    console.log(text);
    console.log(typeof text);
    console.log('match', isMatch, '  valdi', isValidated);
    if (reg.test(text) === false) {
      console.log(
        'Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
      );
      setPassInput(text);
      setIsValidated(false);
    } else {
      setPassInput(text);
      console.log('Pass works');
      setIsValidated(true);
    }
  };

  const passMatchCheck = (text: string, isConfirm: boolean) => {
    // is confirm is true then test text with passinput
    // is confirm false then test text with confirminput
    if (isConfirm && passInput === text) {
      setIsMatch(true);
    } else if (!isConfirm && confirmInput === text) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>Password</Text>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <TextInput
                style={styles.screenInput}
                placeholder="enter password"
                value={passInput.toString()}
                onChangeText={(text: string) => {
                  console.log(text);
                  validatePass(text);
                  passMatchCheck(text, false);
                }}
                // editable={!isValidated}
              />
            </View>
          </View>
          {isValidated && (
            <View style={styles.secondInputContainer}>
              <View style={styles.screenInputContainer}>
                <TextInput
                  style={styles.screenInput}
                  textContentType="password"
                  placeholder="confirm password"
                  value={confirmInput.toString()}
                  onChangeText={(text: string) => {
                    console.log(text);
                    setConfirmInput(text);
                    passMatchCheck(text, true);
                  }}
                  editable={isValidated}
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              NavigationService.navigate('Birthday', BirthdayInput);
              dispatch(
                setProfileUser({ ...userPostProfile, password: passInput })
              );
            }}
            isDisabled={!isMatch}
          />
        </View>
      </View>
    </View>
  );
};
export default PassInput;