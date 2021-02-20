import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../../../../components/buttons/NextButton';
import { IBirthday } from '../../../../models/IUserProfile';
import NavigationService from '../../../../navigation/NavigationService';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import GenderInput from '../GenderInput';
import styles from './styles';

interface BirthdayInputProps {
  // buttonText: string;
}

const BirthdayInput: React.FC<BirthdayInputProps> = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();
  const [birthdayInput, setbirthdayInput] = useState<IBirthday>(
    userPostProfile.birthday
  );
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>My Birthday is</Text>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <View>
                <Text>Month</Text>
                <TextInput
                  autoFocus
                  maxLength={2}
                  style={styles.inputDayMonth}
                  value={birthdayInput.month}
                  onChangeText={(e) => {
                    setbirthdayInput({ ...birthdayInput, month: e });
                  }}
                />
              </View>
              <View>
                <Text>Day</Text>
                <TextInput
                  maxLength={2}
                  style={styles.inputDayMonth}
                  value={birthdayInput.day}
                  onChangeText={(e) =>
                    setbirthdayInput({ ...birthdayInput, day: e })
                  }
                />
              </View>
              <View>
                <Text>Year</Text>
                <TextInput
                  maxLength={4}
                  style={styles.inputYear}
                  value={birthdayInput.year}
                  onChangeText={(e) =>
                    setbirthdayInput({ ...birthdayInput, year: e })
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              NavigationService.navigate('Gender', GenderInput);
              dispatch(
                setProfileUser({
                  ...userPostProfile,
                  birthday: birthdayInput
                })
              );
            }}
            isDisabled={
              !(
                birthdayInput.month?.length === 2 &&
                birthdayInput.day?.length === 2 &&
                birthdayInput.year?.length === 4
              )
            }
          />
        </View>
      </View>
    </View>
  );
};
export default BirthdayInput;
