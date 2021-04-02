import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../../components/buttons/WideButton';
import CheckBoxItem from '../../../../components/FormInputs/checkbox';
import SimpleCheckBoxItem from '../../../../components/FormInputs/simpleCheckBox';
import { IItemWeight } from '../../../../models/IJob';
import NavigationService from '../../../../navigation/NavigationService';
import { setJob } from '../../../../redux/actions/job';
import { AppState } from '../../../../redux/store/configureStore';
import styles from './styles';

// interface NameInputProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const NewJobS2: React.FC = () => {
  const jobState = useSelector((state: AppState) => state.job);
  const dispatch = useDispatch();
  const [itemSize, setItemSize] = useState<
    'small' | 'medium' | 'large' | 'extra large' | undefined
  >(jobState.itemSize);
  const [itemWeight, setItemWeight] = useState<IItemWeight | undefined>(
    jobState.itemWeight
  );

  const checkBoxOnChange = (
    newValue: 'small' | 'medium' | 'large' | 'extra large'
  ) => {
    if (newValue !== itemSize) {
      setItemSize(newValue);
    } else {
      setItemSize(undefined);
    }
  };

  const simpleCheckBoxOnChange = (newValue: IItemWeight) => {
    if (newValue.weight.max !== itemWeight?.weight.max) {
      setItemWeight(newValue);
    } else {
      setItemWeight(undefined);
    }
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
              <View style={styles.subTitleContainer}>
                <CheckBoxItem
                  headerText="Small"
                  subHeaderText="Fits in a small backpack or carry-on bag"
                  valueName="small"
                  isSelected={itemSize === 'small'}
                  onChange={checkBoxOnChange}
                />
              </View>
              <View style={styles.subTitleContainer}>
                <CheckBoxItem
                  headerText="Medium"
                  subHeaderText="Fits in a large duffel bag or carry-on suitcase"
                  valueName="medium"
                  isSelected={itemSize === 'medium'}
                  onChange={checkBoxOnChange}
                />
              </View>
              <View style={styles.subTitleContainer}>
                <CheckBoxItem
                  headerText="Large"
                  subHeaderText="Fits in a large suitcase"
                  valueName="large"
                  isSelected={itemSize === 'large'}
                  onChange={checkBoxOnChange}
                />
              </View>
              <View style={styles.subTitleContainer}>
                <CheckBoxItem
                  headerText="Extra Large"
                  subHeaderText="Needs to be shipped in cargo area"
                  valueName="extra large"
                  isSelected={itemSize === 'extra large'}
                  onChange={checkBoxOnChange}
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
            <View style={styles.subTitleContainer}>
              <SimpleCheckBoxItem
                headerText="Around 2 lbs"
                valueName={{ weight: { max: 2, text: 'Around 2 lbs' } }}
                isSelected={itemWeight?.weight.text === 'Around 2 lbs'}
                onChange={simpleCheckBoxOnChange}
              />
            </View>
            <View style={styles.subTitleContainer}>
              <SimpleCheckBoxItem
                headerText="Around 2-5 lbs"
                valueName={{ weight: { max: 5, text: 'Around 2-5 lbs' } }}
                isSelected={itemWeight?.weight.text === 'Around 2-5 lbs'}
                onChange={simpleCheckBoxOnChange}
              />
            </View>
            <View style={styles.subTitleContainer}>
              <SimpleCheckBoxItem
                headerText="Around 5-20 lbs"
                valueName={{ weight: { max: 20, text: 'Around 5-20 lbs' } }}
                isSelected={itemWeight?.weight.text === 'Around 5-20 lbs'}
                onChange={simpleCheckBoxOnChange}
              />
            </View>
            <View style={styles.subTitleContainer}>
              <SimpleCheckBoxItem
                headerText="Around 20-50 lbs"
                valueName={{ weight: { max: 50, text: 'Around 20-50 lbs' } }}
                isSelected={itemWeight?.weight.text === 'Around 20-50 lbs'}
                onChange={simpleCheckBoxOnChange}
              />
            </View>
            <View style={styles.subTitleContainer}>
              <SimpleCheckBoxItem
                headerText="Over 50 lbs"
                valueName={{ weight: { max: 1000, text: 'Over 50 lbs' } }}
                isSelected={itemWeight?.weight.text === 'Over 50 lbs'}
                onChange={simpleCheckBoxOnChange}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Next"
              onPressHandler={() => {
                console.log('next.');
                dispatch(
                  setJob({
                    ...jobState,
                    ...{ itemSize, itemWeight }
                  })
                );

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
