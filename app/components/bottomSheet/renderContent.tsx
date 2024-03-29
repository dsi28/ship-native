import React from 'react';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import WideButton from '../buttons/WideButton';
import styles from './styles';

interface RenderContentProps {
  setPictureInput: (image: string) => void;
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
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then((image) => {
            setPictureInput(image.path);
            // @ts-ignore
            sheetRef.current.snapTo(2);
          });
        }}
        isSelected
        btnBackgoundColor="#FFC100"
        btnBorderColor="#FFC100"
        btnTextColor="black"
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
            setPictureInput(image.path);
            // @ts-ignore
            sheetRef.current.snapTo(2);
          });
        }}
        isSelected
        btnBackgoundColor="#FFC100"
        btnBorderColor="#FFC100"
        btnTextColor="black"
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
        btnBackgoundColor="#FFC100"
        btnBorderColor="#FFC100"
        btnTextColor="black"
      />
    </View>
  </View>
);
export default RenderContent;
