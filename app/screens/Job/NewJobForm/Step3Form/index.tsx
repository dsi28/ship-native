import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
// import validator from 'validator';
import WideButton from '../../../../components/buttons/WideButton';
import TextFormInput from '../../../../components/FormInputs/TextI';
import NumberComponent from '../../../../components/numberComponent';
import { IItemReciever } from '../../../../models/IJob';
import NavigationService from '../../../../navigation/NavigationService';
import { resetNewJob, setNewJob } from '../../../../redux/actions/job';
import { AppState } from '../../../../redux/store/configureStore';
import styles from './styles';

const NewJobS3: React.FC = () => {
  const jobState = useSelector((state: AppState) => state.job.newJob);
  const dispatch = useDispatch();
  // @ts-ignore
  const [note, setNote] = useState<string>(jobState.note || '');
  const [itemReceiver, setItemReceiver] = useState<IItemReciever>(
    // @ts-ignore
    jobState.itemReceiver || {
      name: '',
      email: ''
    }
  );
  const [shipmentCost, setShipmentCost] = useState<number>(
    // @ts-ignore
    jobState.shipmentCost || 60
  );

  const textFormInputChangeHandler = (
    propertyName: string,
    propertyValue: string
  ) => {
    setItemReceiver({ ...itemReceiver, ...{ [propertyName]: propertyValue } });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.itemInfoContainer}>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>Step 3</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <View>
              <Text style={styles.subTitle}>Add note for the traveller</Text>
            </View>
            <View>
              <Text style={styles.inputSubText}>(optional)</Text>
            </View>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputMultiLine}
                  editable
                  multiline
                  placeholder="Write here"
                  maxLength={120}
                  numberOfLines={4}
                  value={note}
                  onChangeText={setNote}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.addItemContainer}>
          <View style={styles.AddItemTitleContainer}>
            <Text style={styles.subTitle}>Who will receive the item?</Text>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <TextFormInput
                labelText="Name"
                placeholderText="Name"
                inputValue={itemReceiver.name}
                propertyName="name"
                onChangeHandler={textFormInputChangeHandler}
                isPassword={false}
              />
            </View>
            <View>
              <TextFormInput
                labelText="Email Address"
                placeholderText="Email Address"
                inputValue={itemReceiver.email}
                propertyName="email"
                onChangeHandler={textFormInputChangeHandler}
                isPassword={false}
              />
              <Text>Please enter valid email</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemInfoContainer}>
          <View style={styles.subTitleContainer}>
            <View>
              <Text style={styles.subTitle}>Shipment Cost</Text>
            </View>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <View style={styles.inputContainer}>
                <NumberComponent
                  count={shipmentCost}
                  setCount={setShipmentCost}
                />
              </View>
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
                    ...{ note, itemReceiver, shipmentCost }
                  })
                );
                NavigationService.navigate('Preview Job Post');
              }}
              isSelected
              btnBackgoundColor="#87CEEB"
              btnBorderColor="#87CEEB"
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
              btnBorderColor="#87CEEB"
              btnTextColor="#87CEEB"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default NewJobS3;
