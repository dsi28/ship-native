import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../../components/buttons/WideButton';
import TextFormInput from '../../../../components/FormInputs/TextI';
import NumberToggler from '../../../../components/numberToggler';
import NavigationService from '../../../../navigation/NavigationService';
import { AppState } from '../../../../redux/store/configureStore';
import styles from './styles';

// interface NameInputProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const NewJobS3: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();

  // const [nameInput, setNameInput] = useState(userPostProfile.name);
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
              <Text style={{ fontSize: 20, color: 'gray' }}>(optional)</Text>
            </View>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <View
                style={{
                  marginBottom: 20
                }}
              >
                <TextInput
                  style={{
                    borderColor: 'gray',
                    borderWidth: 2,
                    textAlignVertical: 'top',
                    fontSize: 20
                  }}
                  editable
                  placeholder="Write here"
                  maxLength={40}
                  numberOfLines={4}
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
            <View style={{ marginBottom: 20 }}>
              <TextFormInput labelText="Name" placeholderText="Name" />
            </View>
            <View>
              <TextFormInput
                labelText="Email Address"
                placeholderText="Email Address"
              />
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
              <View
                style={{
                  marginBottom: 20
                }}
              >
                <NumberToggler />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Next"
              onPressHandler={() => {
                console.log('next');
                NavigationService.navigate('Preview Job Post');
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
export default NewJobS3;
