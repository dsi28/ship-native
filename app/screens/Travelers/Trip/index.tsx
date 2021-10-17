import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, Pressable, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import TextFormInput from '../../../components/FormInputs/TextI';
import TextFormInputWithIcon from '../../../components/FormInputs/TextIWithIcon';
import { ITrip, travelerPlaceHolder } from '../../../models/ITraveler';
import NavigationService from '../../../navigation/NavigationService';
import { resetNewJob } from '../../../redux/actions/job';
import { AppState } from '../../../redux/store/configureStore';
import { addTripFirebase } from '../../../services/trip';
import styles from './styles';

const NewTrip: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);

  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);
  // @ts-ignore
  const [newTrip, setNewTrip] = useState<ITrip>(travelerPlaceHolder);

  const textFormInputChangeHandler = (
    propertyName: string,
    propertyValue: string
  ) => {
    setNewTrip({ ...newTrip, [propertyName]: propertyValue });
  };

  const setNoteHandler = (value: string) => {
    setNewTrip({ ...newTrip, note: value });
  };

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setNewTrip({ ...newTrip, date: new Date(currentDate) });
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handlePressCalendarInput = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    propertyName: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    propertyValue: string
  ) => {
    // showDatepicker();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.itemInfoContainer}>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>Add Trip</Text>
          </View>

          <View>
            <View style={styles.screenInputContainer}>
              <View style={styles.inputContainer}>
                <TextFormInput
                  labelText="Departure City"
                  placeholderText="Enter city"
                  onChangeHandler={textFormInputChangeHandler}
                  propertyName="departureCity"
                  inputValue={
                    newTrip?.departureCity ? newTrip.departureCity : ''
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextFormInput
                  labelText="Arrival City"
                  placeholderText="Enter city"
                  onChangeHandler={textFormInputChangeHandler}
                  propertyName="arrivalCity"
                  inputValue={newTrip?.arrivalCity ? newTrip.arrivalCity : ''}
                />
              </View>
              <View style={styles.inputContainer}>
                <Pressable onPress={showDatepicker}>
                  <TextFormInputWithIcon
                    labelText="Date"
                    placeholderText="Enter Delivery Date"
                    iconName="calendar-today"
                    onChangeHandler={handlePressCalendarInput}
                    propertyName="itemDeliveryDate"
                    inputValue={
                      // eslint-disable-next-line no-nested-ternary
                      typeof newTrip?.date !== undefined
                        ? typeof newTrip?.date === 'object'
                          ? newTrip?.date.toDateString() // newJob.itemDeliveryDate?.toDateString()
                          : // @ts-ignore
                            new Date(newTrip?.date).toDateString() // this is a mess
                        : date.toDateString() // 'set date'
                    }
                    inputDisabled={false}
                  />
                </Pressable>
                <View>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      is24Hour
                      display="default"
                      onChange={(e: any, pickedDate: any) => {
                        onChangeDate(e, pickedDate);
                      }}
                    />
                  )}
                </View>
              </View>
              <View style={styles.inputContainer}>
                <TextFormInput
                  labelText="Flight Number"
                  placeholderText="Enter flight number"
                  onChangeHandler={textFormInputChangeHandler}
                  propertyName="flightNumber"
                  inputValue={newTrip?.flightNumber ? newTrip.flightNumber : ''}
                />
              </View>
              <View>
                <View style={styles.screenInputContainer}>
                  <View
                    style={{
                      ...styles.inputContainer,
                      ...{ marginBottom: 40 }
                    }}
                  >
                    <View style={styles.noteLabelContainer}>
                      <View>
                        <Text style={styles.noteLabelText}>Add Note</Text>
                      </View>
                    </View>
                    <TextInput
                      style={styles.noteInputText}
                      editable
                      multiline
                      placeholder="Write here"
                      maxLength={120}
                      numberOfLines={4}
                      value={newTrip.note}
                      onChangeText={setNoteHandler}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <WideButton
                buttonText="Add Trip"
                onPressHandler={() => {
                  // dispatch(tempSetNewJob({ ...jobState, ...newJob }));
                  addTripFirebase(user, newTrip);
                  NavigationService.navigate('HomeScreen');
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
                  console.log('cancel job');
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
      </View>
    </ScrollView>
  );
};
export default NewTrip;
