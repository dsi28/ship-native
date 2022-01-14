import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../../components/buttons/WideButton';
import ItemDims from '../../../../components/FormInputs/itemDimentions';
import ItemWeight from '../../../../components/FormInputs/itemWeight';
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
  const [itemWeight, setItemWeight] = useState<number>(
    // @ts-ignore
    jobState.itemWeight || 0
  );
  const [itemLength, setItemLength] = useState<number>(
    // @ts-ignore
    jobState.itemLength || 0
  );
  const [itemWidth, setItemWidth] = useState<number>(
    // @ts-ignore
    jobState.itemWidth || 0
  );
  const [itemHeight, setItemHeight] = useState<number>(
    // @ts-ignore
    jobState.itemHeight || 0
  );

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
            <ItemDims
              length={itemLength}
              width={itemWidth}
              height={itemHeight}
              setLength={setItemLength}
              setWidth={setItemWidth}
              setHeight={setItemHeight}
            />
          </View>
        </View>
        <View style={styles.addItemContainer}>
          <View style={styles.AddItemTitleContainer}>
            <Text style={styles.subTitle}>Weight</Text>
          </View>
          <ItemWeight weight={itemWeight} setWeight={setItemWeight} />
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
                      itemWeight,
                      itemLength,
                      itemWidth,
                      itemHeight
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
