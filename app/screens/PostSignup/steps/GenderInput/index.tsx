import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../../../../components/buttons/NextButton';
import WideButton from '../../../../components/buttons/WideButton';
import { IGender } from '../../../../models/IUserProfile';
import NavigationService from '../../../../navigation/NavigationService';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import RoleInput from '../RoleInput';
import styles from './styles';

interface GenderInputProps {
  // buttonText: string;
}

const GenderInput: React.FC<GenderInputProps> = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();
  const [genderInput, setGenderInput] = useState<IGender>(
    userPostProfile.gender
  );
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>I am a</Text>
          </View>
          <View style={styles.screenInputContainer}>
            <View style={styles.inputButtonContainer}>
              <WideButton
                buttonText="Woman"
                onPressHandler={() => {
                  setGenderInput({ gender: 'woman' });
                }}
                isSelected={genderInput.gender === 'woman'}
              />
            </View>
            <View style={styles.inputButtonContainer}>
              <WideButton
                buttonText="Man"
                onPressHandler={() => {
                  setGenderInput({ gender: 'man' });
                }}
                isSelected={genderInput.gender === 'man'}
              />
            </View>
            <View style={styles.inputButtonContainer}>
              {/* TODO discucss what to do with other - other apps list all other genders */}
              <WideButton
                buttonText="Other"
                onPressHandler={() => {
                  setGenderInput({ gender: 'other' });
                }}
                isSelected={genderInput.gender === 'other'}
              />
            </View>
          </View>
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              NavigationService.navigate('Role', RoleInput);
              dispatch(
                setProfileUser({
                  ...userPostProfile,
                  gender: genderInput
                })
              );
            }}
            isDisabled={!(genderInput.gender && genderInput.gender.length > 0)}
          />
        </View>
      </View>
    </View>
  );
};
export default GenderInput;
