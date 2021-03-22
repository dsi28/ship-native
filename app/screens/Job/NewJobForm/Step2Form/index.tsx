import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../../components/buttons/WideButton';
import CheckBoxItem from '../../../../components/FormInputs/checkbox';
import SimpleCheckBoxItem from '../../../../components/FormInputs/simpleCheckBox';
import NavigationService from '../../../../navigation/NavigationService';
import { AppState } from '../../../../redux/store/configureStore';
import styles from './styles';

// interface NameInputProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const NewJobS2: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();
  const [pictureInput, setPictureInput] = useState<string>('');
  const sheetRef = React.useRef();
  const fall = new Animated.Value(1);

  const handleAddImage = () => {
    // @ts-ignore
    sheetRef.current.snapTo(0);
    console.log('add img');
  };
  const handleRemoveImage = () => {
    setPictureInput('');
    console.log('remove img');
  };

  // const [nameInput, setNameInput] = useState(userPostProfile.name);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.itemInfoContainer}>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>Step 2</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Select Item Size</Text>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <View style={{ marginBottom: 20 }}>
                <CheckBoxItem
                  headerText="Small"
                  subHeaderText="Fits in a small backpack or carry-on bag"
                />
              </View>
              <View style={{ marginBottom: 20 }}>
                <CheckBoxItem
                  headerText="Medium"
                  subHeaderText="Fits in a large duffel bag or carry-on suitcase"
                />
              </View>
              <View style={{ marginBottom: 20 }}>
                <CheckBoxItem
                  headerText="Large"
                  subHeaderText="Fits in a large suitcase"
                />
              </View>
              <View style={{ marginBottom: 20 }}>
                <CheckBoxItem
                  headerText="Extra Large"
                  subHeaderText="Needs to be shipped in cargo area"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.addItemContainer}>
          <View style={styles.AddItemTitleContainer}>
            <Text style={styles.subTitle}>Select Item Weight</Text>
          </View>
          <View>
            <View style={{ marginBottom: 20 }}>
              <SimpleCheckBoxItem headerText="Around 2 lbs" />
            </View>
            <View style={{ marginBottom: 20 }}>
              <SimpleCheckBoxItem headerText="Around 2-5 lbs" />
            </View>
            <View style={{ marginBottom: 20 }}>
              <SimpleCheckBoxItem headerText="Around 5-20 lbs" />
            </View>
            <View style={{ marginBottom: 20 }}>
              <SimpleCheckBoxItem headerText="Around 20-50 lbs" />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Next"
              onPressHandler={() => {
                console.log('next.');
                NavigationService.navigate('Step 3');
              }}
              isSelected
              btnBackgoundColor="orange"
              btnBorderColor="orange"
              btnTextColor="white"
            />
          </View>

          <View>
            <WideButton
              buttonText="Cancel"
              onPressHandler={() => console.log('cancel')}
              isSelected
              btnBackgoundColor="white"
              btnBorderColor="orange"
              btnTextColor="orange"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default NewJobS2;
