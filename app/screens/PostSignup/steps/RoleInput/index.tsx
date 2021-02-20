import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../../../../components/buttons/NextButton';
import WideButton from '../../../../components/buttons/WideButton';
import NavigationService from '../../../../navigation/NavigationService';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import ShowMeInput from '../ShowMe';
import styles from './styles';

interface RoleInputProps {
  // buttonText: string;
}

const RoleInput: React.FC<RoleInputProps> = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();
  const [roleInput, setRoleInput] = useState<string>(userPostProfile.role);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>My role in this app is</Text>
          </View>
          <View style={styles.screenInputContainer}>
            <View style={styles.optionButtonContainer}>
              <WideButton
                buttonText="Seller"
                onPressHandler={() => {
                  setRoleInput('seller');
                }}
                isSelected={roleInput === 'seller'}
              />
            </View>
            <View style={styles.optionButtonContainer}>
              <WideButton
                buttonText="User"
                onPressHandler={() => {
                  setRoleInput('user');
                }}
                isSelected={roleInput === 'user'}
              />
            </View>
          </View>
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              NavigationService.navigate('ShowMe', ShowMeInput);
              dispatch(
                setProfileUser({
                  ...userPostProfile,
                  role: roleInput
                })
              );
            }}
            isDisabled={!(roleInput.length > 0)}
          />
        </View>
      </View>
    </View>
  );
};
export default RoleInput;
