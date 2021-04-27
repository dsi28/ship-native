import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../../../../components/buttons/NextButton';
import NavigationService from '../../../../navigation/NavigationService';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import { AppState } from '../../../../redux/store/configureStore';
import EmailInput from '../Email';
import styles from './styles';

const NameInput: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.profile);
  const dispatch = useDispatch();
  // @ts-ignore
  const [nameInput, setNameInput] = useState(userPostProfile.name);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>My name is</Text>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <TextInput
                style={styles.screenInput}
                placeholder="Name.."
                value={nameInput}
                onChangeText={(e) => {
                  setNameInput(e);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              NavigationService.navigate('Email', EmailInput);
              // @ts-ignore
              dispatch(setProfileUser({ ...userPostProfile, name: nameInput }));
            }}
            // @ts-ignore
            isDisabled={nameInput.length < 2}
          />
        </View>
      </View>
    </View>
  );
};
export default NameInput;
