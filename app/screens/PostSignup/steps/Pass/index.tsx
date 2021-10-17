import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../../../../components/buttons/NextButton';
import NavigationService from '../../../../navigation/NavigationService';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import { AppState } from '../../../../redux/store/configureStore';
import BirthdayInput from '../BirthdayInput';
import styles from './styles';

const PassInput: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.profile);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-useless-escape
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  // @ts-ignore
  const [passInput, setPassInput] = useState(userPostProfile.password || '');
  const [confirmInput, setConfirmInput] = useState(
    // @ts-ignore
    userPostProfile.password || ''
  );
  const [isValidated, setIsValidated] = useState(reg.test(passInput));
  const [isMatch, setIsMatch] = useState(
    passInput !== '' && passInput === confirmInput
  );

  const validatePass = (text: string) => {
    if (reg.test(text) === false) {
      setPassInput(text);
      setIsValidated(false);
    } else {
      setPassInput(text);
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
                  validatePass(text);
                  passMatchCheck(text, false);
                }}
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
                // @ts-ignore
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
