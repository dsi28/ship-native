import React from 'react';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import WideButton from '../buttons/WideButton';
import styles from './styles';

interface RenderContentProps {
  setPictureInput: React.Dispatch<React.SetStateAction<string>>;
  pictureInput: string;
  sheetRef: React.MutableRefObject<undefined>;
}

const RenderContent: React.FC<RenderContentProps> = ({
  setPictureInput,
  sheetRef
}) => (
  <View style={styles.contentContainer}>
    <View style={styles.contentButtonContainer}>
      <WideButton
        buttonText="Select From Gallery"
        onPressHandler={() => {
          console.log('gallery');
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then((image) => {
            console.log(image);
            setPictureInput(image.path);
            // @ts-ignore
            sheetRef.current.snapTo(2);
          });
        }}
        isSelected
      />
    </View>
    <View style={styles.contentButtonContainer}>
      <WideButton
        buttonText="Take Photo"
        onPressHandler={() => {
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
          }).then((image) => {
            console.log(image);
            setPictureInput(image.path);
            // @ts-ignore
            sheetRef.current.snapTo(2);
          });
        }}
        isSelected
      />
    </View>
    <View>
      <WideButton
        onPressHandler={() => {
          // @ts-ignore
          sheetRef.current.snapTo(2);
        }}
        buttonText="Cancel"
        isSelected={false}
      />
    </View>
  </View>
);
export default RenderContent;
