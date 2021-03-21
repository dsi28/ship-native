import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import RenderContent from '../../../../components/bottomSheet/renderContent';
import RenderHeader from '../../../../components/bottomSheet/renderHeader';
import WideButton from '../../../../components/buttons/WideButton';
import PictureUploadComponent from '../../../../components/pictureUpload';
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
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    // backgroundColor: 'red',
                    justifyContent: 'flex-start'
                  }}
                >
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    justifyContent: 'center'
                  }}
                >
                  <View
                    style={{
                      justifyContent: 'center',
                      marginTop: 2
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                      Small
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: 'gray' }}>
                      Fits in a small backpack or carry-on bag
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.addItemContainer}>
          <View style={styles.AddItemTitleContainer}>
            <Text style={styles.subTitle}>Add Item Image</Text>
          </View>
          <View style={styles.imageInputContainer}>
            {pictureInput.length < 1 ? (
              <PictureUploadComponent handleImageChange={handleAddImage} />
            ) : (
              <PictureUploadComponent
                handleImageChange={handleRemoveImage}
                imageShown={pictureInput}
                imageIndex={0}
              />
            )}
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Next"
              onPressHandler={() => console.log('next')}
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
            setPictureInput={setPictureInput}
            pictureInput={pictureInput}
            sheetRef={sheetRef}
          />
        )}
        renderHeader={RenderHeader}
      />
    </ScrollView>
  );
};
export default NewJobS2;
