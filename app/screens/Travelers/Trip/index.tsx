import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import TextFormInput from '../../../components/FormInputs/TextI';
import TextFormInputWithIcon from '../../../components/FormInputs/TextIWithIcon';
import { ITraveler, travelerPlaceHolder } from '../../../models/ITraveler';
import NavigationService from '../../../navigation/NavigationService';
import { resetNewJob } from '../../../redux/actions/job';
import styles from './styles';

const NewTrip: React.FC = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);
  // @ts-ignore
  const [newTrip, setNewTrip] = useState<ITraveler>(travelerPlaceHolder);

  const textFormInputChangeHandler = (
    propertyName: string,
    propertyValue: string
  ) => {
    setNewTrip({ ...newTrip, [propertyName]: propertyValue });
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
                      onChange={(e, pickedDate) => {
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
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <WideButton
                buttonText="Next"
                onPressHandler={() => {
                  // dispatch(tempSetNewJob({ ...jobState, ...newJob }));
                  NavigationService.navigate('Step 2');
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
