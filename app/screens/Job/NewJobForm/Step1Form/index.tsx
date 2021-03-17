import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../../../../components/buttons/NextButton';
import DropDownFormInput from '../../../../components/FormInputs/DropDown';
import TextFormInput from '../../../../components/FormInputs/TextI';
import { AppState } from '../../../../redux/store/configureStore';
import styles from './styles';

// interface NameInputProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const NewJobS1: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();

  // const [nameInput, setNameInput] = useState(userPostProfile.name);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>Step 1</Text>
          </View>
          <View
            style={{
              // marginTop: 20,
              marginBottom: 40
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'black',
                opacity: 0.8,
                // width: '70%',
                marginRight: 150
              }}
            >
              Basic Details
            </Text>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <DropDownFormInput
                labelText="Item Category"
                placeholderText="Select a category"
                itemList={[
                  {
                    label: 'Category 1',
                    value: 'cat1'
                    // icon: () => <Icon name="flag" size={18} color="#900" />,
                    // hidden: true
                  },
                  {
                    label: 'Category 2',
                    value: 'cat2'
                    // icon: () => <Icon name="flag" size={18} color="#900" />
                  },
                  {
                    label: 'Category 3',
                    value: 'cat3'
                    // icon: () => <Icon name="flag" size={18} color="#900" />
                  }
                ]}
              />
              <TextFormInput
                labelText="Item Name"
                placeholderText="Enter item name"
              />
              <TextFormInput
                labelText="Delivery Date"
                placeholderText="Enter delivery date"
              />

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 20, color: 'gray' }}>
                      Delivery Location
                    </Text>
                  </View>
                  <View>
                    <MaterialIcon
                      name="location-pin"
                      size={25}
                      color="#e91e63"
                    />
                  </View>
                </View>
                <View style={{ marginBottom: 30 }}>
                  <TextInput
                    style={styles.screenInput}
                    placeholder="..."
                    // value={nameInput}
                    onChangeText={(e) => {
                      console.log(e);
                      // setNameInput(e);
                    }}
                  />
                </View>
              </View>
              <TextFormInput
                labelText="Item Value"
                placeholderText="Enter item value"
              />
            </View>
          </View>
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              // NavigationService.navigate('Email', EmailInput);
              // dispatch(setProfileUser({ ...userPostProfile, name: nameInput }));
            }}
            // isDisabled={nameInput.length < 2}
            isDisabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default NewJobS1;
