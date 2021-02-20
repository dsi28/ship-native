import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../../../../components/buttons/NextButton';
import WideButton from '../../../../components/buttons/WideButton';
import NavigationService from '../../../../navigation/NavigationService';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import PictureInput from '../PictureInput';
import styles from './styles';

interface ShowMeInputProps {
  // buttonText: string;
}
// TODO I think this should only be shown to users not sellers.
const ShowMeInput: React.FC<ShowMeInputProps> = () => {
  // TODO this might not be needed for the bid flow but maybe for newsfeed flow
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();
  const [showMeInput, setShowMeInput] = useState<
    '' | 'woman' | 'man' | 'everyone'
  >(userPostProfile.showMe);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>Show me</Text>
          </View>
          <View style={styles.screenInputContainer}>
            <View style={styles.optionButtonContainer}>
              <WideButton
                buttonText="Women"
                onPressHandler={() => {
                  setShowMeInput('woman');
                }}
                isSelected={showMeInput === 'woman'}
              />
            </View>
            <View style={styles.optionButtonContainer}>
              <WideButton
                buttonText="Men"
                onPressHandler={() => {
                  setShowMeInput('man');
                }}
                isSelected={showMeInput === 'man'}
              />
            </View>
            <View style={styles.optionButtonContainer}>
              {/* TODO discucss what to do with other - other apps list all other genders */}
              <WideButton
                buttonText="Everyone"
                onPressHandler={() => {
                  setShowMeInput('everyone');
                }}
                isSelected={showMeInput === 'everyone'}
              />
            </View>
          </View>
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              NavigationService.navigate('Picture', PictureInput);
              dispatch(
                setProfileUser({
                  ...userPostProfile,
                  showMe: showMeInput
                })
              );
            }}
            isDisabled={showMeInput.length < 1}
          />
        </View>
      </View>
    </View>
  );
};
export default ShowMeInput;
