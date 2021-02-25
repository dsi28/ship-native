import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import RenderContent from '../../../../components/bottomSheet/renderContent';
import RenderHeader from '../../../../components/bottomSheet/renderHeader';
import NextButton from '../../../../components/buttons/NextButton';
import PictureUploadComponent from '../../../../components/pictureUpload';
import NavigationService from '../../../../navigation/NavigationService';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import styles from './styles';

// interface NameInputProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const PictureInput: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.default);
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pictureInput, setPictureInput] = useState<string>(
    userPostProfile.pictures
  );
  const sheetRef = React.useRef();
  const fall = new Animated.Value(1);

  const handleAddImage = () => {
    // @ts-ignore
    sheetRef.current.snapTo(0);
    console.log('add img');
  };
  const handleRemoveImage = () => {
    setPictureInput('');
    console.log('remove img');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.subContainer,
          ...{ opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)) }
        }}
      >
        <View style={styles.imageContentContainer}>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitle}>Upload your profile picture</Text>
          </View>
          <View>
            <View style={styles.screenInputContainer}>
              <View style={{ ...styles.imageRowView, ...{ marginBottom: 20 } }}>
                <View style={styles.imageView}>
                  {pictureInput.length < 1 ? (
                    <PictureUploadComponent
                      handleImageChange={handleAddImage}
                    />
                  ) : (
                    <PictureUploadComponent
                      handleImageChange={handleRemoveImage}
                      imageShown={pictureInput[0]}
                      imageIndex={0}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.screenNextButtonContainer}>
          <NextButton
            buttonText="Next"
            onPressHandler={() => {
              console.log('end of profile flow');
              // NavigationService.navigate('FlowStart', BottomTabsNav);
              // TODO keep an eye on this. may need to add the rest of the routes.
              NavigationService.reset(1, [{ name: 'FlowStart' }]);
              dispatch(
                setProfileUser({ ...userPostProfile, pictures: pictureInput })
              );
            }}
            isDisabled={pictureInput.length < 1}
          />
        </View>
      </Animated.View>
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
    </View>
  );
};
export default PictureInput;
