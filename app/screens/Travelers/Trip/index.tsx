import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import RenderContent from '../../../components/bottomSheet/renderContent';
import RenderHeader from '../../../components/bottomSheet/renderHeader';
import WideButton from '../../../components/buttons/WideButton';
import DropDownFormInput from '../../../components/FormInputs/DropDown';
import TextFormInput from '../../../components/FormInputs/TextI';
import TextFormInputWithIcon from '../../../components/FormInputs/TextIWithIcon';
import PictureUploadComponent from '../../../components/pictureUpload';
import { INewJob } from '../../../models/IJob';
import NavigationService from '../../../navigation/NavigationService';
import {
  resetNewJob,
  setNewJob as tempSetNewJob
} from '../../../redux/actions/job';
import { AppState } from '../../../redux/store/configureStore';
import styles from './styles';

const NewTrip: React.FC = () => {
  const jobState = useSelector((state: AppState) => state.job.newJob);

  const dispatch = useDispatch();
  const [pictureInput, setPictureInput] = useState<string>('');
  const sheetRef = React.useRef();
  const fall = new Animated.Value(1);

  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);
  // @ts-ignore
  const [newJob, setNewJob] = useState<INewJob>(jobState);

  const handleAddImage = () => {
    // @ts-ignore
    sheetRef.current.snapTo(0);
    console.log('add img');
  };
  const handleRemoveImage = () => {
    setPictureInput('');
    console.log('remove img');
  };

  const textFormInputChangeHandler = (
    propertyName: string,
    propertyValue: string
  ) => {
    setNewJob({ ...newJob, [propertyName]: propertyValue });
  };

  const handleImageChange = (image: string) => {
    setPictureInput(image);
    setNewJob({ ...newJob, itemImages: image });
  };

  const handleCategoryChange = (
    newCategory:
      | 'category 1'
      | 'category 2'
      | 'category 3'
      | 'category 4'
      | 'category 5'
  ) => {
    setNewJob({ ...newJob, itemCategory: newCategory });
  };

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setNewJob({ ...newJob, itemDeliveryDate: new Date(currentDate) });
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
              <DropDownFormInput
                labelText="Item Category"
                placeholderText="Select a category"
                onChangeHandler={handleCategoryChange}
                itemList={[
                  {
                    label: 'Category 1',
                    value: 'category 1'
                  },
                  {
                    label: 'Category 2',
                    value: 'category 2'
                  },
                  {
                    label: 'Category 3',
                    value: 'category 3'
                  },
                  {
                    label: 'Category 4',
                    value: 'category 4'
                  },
                  {
                    label: 'Category 5',
                    value: 'category 5'
                  }
                ]}
                inputValue={newJob?.itemCategory ? newJob.itemCategory : null}
              />
              <View style={styles.inputContainer}>
                <TextFormInput
                  labelText="Item Name"
                  placeholderText="Enter item name"
                  onChangeHandler={textFormInputChangeHandler}
                  propertyName="itemName"
                  inputValue={newJob?.itemName ? newJob.itemName : ''}
                />
              </View>
              <View style={styles.inputContainer}>
                <Pressable onPress={showDatepicker}>
                  <TextFormInputWithIcon
                    labelText="Delivery Date"
                    placeholderText="Enter Delivery Date"
                    iconName="calendar-today"
                    onChangeHandler={handlePressCalendarInput}
                    propertyName="itemDeliveryDate"
                    inputValue={
                      // eslint-disable-next-line no-nested-ternary
                      typeof newJob?.itemDeliveryDate !== undefined
                        ? typeof newJob?.itemDeliveryDate === 'object'
                          ? newJob?.itemDeliveryDate.toDateString() // newJob.itemDeliveryDate?.toDateString()
                          : // @ts-ignore
                            new Date(newJob?.itemDeliveryDate).toDateString() // this is a mess
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
                <TextFormInputWithIcon
                  labelText="Delivery Location"
                  placeholderText="Enter Location"
                  iconName="location-pin"
                  onChangeHandler={textFormInputChangeHandler}
                  propertyName="itemDeliveryLocation"
                  inputValue={
                    newJob?.itemDeliveryLocation
                      ? newJob.itemDeliveryLocation
                      : ''
                  }
                  inputDisabled
                />
              </View>
              <TextFormInput
                labelText="Item Value"
                placeholderText="Enter item value"
                onChangeHandler={textFormInputChangeHandler}
                propertyName="itemValue"
                inputValue={newJob?.itemValue ? newJob.itemValue : ''}
              />
              {/* TODO replace this with an i icon  */}
              <View style={styles.inputSubTextContainer}>
                <Text style={styles.inputSubText}>
                  This value is for insurance purposes so try to be as accurate
                  as possible
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.addItemContainer}>
          <View style={styles.AddItemTitleContainer}>
            <Text style={styles.subTitle}>Add Item Image</Text>
          </View>
          <View style={styles.imageInputContainer}>
            {newJob.itemImages && newJob.itemImages.length > 1 ? (
              <PictureUploadComponent
                handleImageChange={handleRemoveImage}
                imageShown={newJob.itemImages}
              />
            ) : (
              <PictureUploadComponent handleImageChange={handleAddImage} />
            )}
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Next"
              onPressHandler={() => {
                dispatch(tempSetNewJob({ ...jobState, ...newJob }));
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
      <BottomSheet
        // @ts-ignore
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        initialSnap={2}
        borderRadius={10}
        callbackNode={fall}
        enabledGestureInteraction
        renderContent={() => (
          <RenderContent
            setPictureInput={handleImageChange}
            pictureInput={pictureInput}
            sheetRef={sheetRef}
          />
        )}
        renderHeader={RenderHeader}
      />
    </ScrollView>
  );
};
export default NewTrip;
