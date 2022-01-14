import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontA5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../../components/buttons/WideButton';
import SimpleCheckBoxItem from '../../../../components/FormInputs/simpleCheckBox';
import { IItemWeight } from '../../../../models/IJob';
import NavigationService from '../../../../navigation/NavigationService';
import { resetNewJob, setNewJob } from '../../../../redux/actions/job';
import { AppState } from '../../../../redux/store/configureStore';
import styles from './styles';

const NewJobS2: React.FC = () => {
  const jobState = useSelector((state: AppState) => state.job.newJob);
  const dispatch = useDispatch();
  // const [itemSize, setItemSize] = useState<
  //   'small' | 'medium' | 'large' | 'extra large' | undefined
  //   // @ts-ignore
  // >(jobState.itemSize);
  const [itemWeight, setItemWeight] = useState<IItemWeight | undefined>(
    // @ts-ignore
    jobState.itemWeight
  );

  // const checkBoxOnChange = (
  //   newValue: 'small' | 'medium' | 'large' | 'extra large'
  // ) => {
  //   if (newValue !== itemSize) {
  //     setItemSize(newValue);
  //   } else {
  //     setItemSize(undefined);
  //   }
  // };

  const simpleCheckBoxOnChange = (newValue: IItemWeight) => {
    if (newValue.weight.max !== itemWeight?.weight.max) {
      setItemWeight(newValue);
    } else {
      setItemWeight(undefined);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.itemInfoContainer}>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>Step 2</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Dimensions</Text>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  backgroundColor: 'lightgray',
                  // justifyContent: 'space-evenly',
                  paddingHorizontal: 20,
                  // alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#f3f5fa'
                }}
              >
                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}
                  >
                    ITEM DIMENSIONS
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 5,
                    marginBottom: 15,
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'gray'
                      }}
                    >
                      L
                    </Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      marginHorizontal: 5
                    }}
                  >
                    <FontA5 name="times" size={10} color="gray" />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'gray'
                      }}
                    >
                      W
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginHorizontal: 5
                    }}
                  >
                    <FontA5 name="times" size={10} color="gray" />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'gray'
                      }}
                    >
                      H
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  backgroundColor: '#f3f5fa',
                  justifyContent: 'space-evenly',
                  marginBottom: 20,
                  paddingRight: 20,
                  height: 80,
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#f3f5fa'
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <TextInput
                    style={{ fontSize: 20, fontWeight: 'bold' }}
                    maxLength={4}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center'
                  }}
                >
                  <FontA5 name="times" size={30} color="gray" />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <TextInput
                    style={{ fontSize: 20, fontWeight: 'bold' }}
                    maxLength={4}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center'
                  }}
                >
                  <FontA5 name="times" size={30} color="gray" />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <TextInput
                    style={{ fontSize: 20, fontWeight: 'bold' }}
                    maxLength={4}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ fontSize: 25, color: 'gray' }}>in</Text>
                </View>
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
                dispatch(
                  setNewJob({
                    ...jobState,
                    ...{
                      // itemSize,
                      itemWeight
                    }
                  })
                );

                NavigationService.navigate('Step 3');
              }}
              isSelected
              btnBackgoundColor="mediumvioletred"
              btnBorderColor="mediumvioletred"
              btnTextColor="white"
            />
          </View>

          <View>
            <WideButton
              buttonText="Cancel"
              onPressHandler={() => {
                NavigationService.navigate('HomeScreen');
                dispatch(resetNewJob());
              }}
              isSelected
              btnBackgoundColor="white"
              btnBorderColor="mediumvioletred"
              btnTextColor="mediumvioletred"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default NewJobS2;
