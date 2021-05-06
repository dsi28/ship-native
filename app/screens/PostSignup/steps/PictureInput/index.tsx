import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import RenderContent from '../../../../components/bottomSheet/renderContent';
import RenderHeader from '../../../../components/bottomSheet/renderHeader';
import NextButton from '../../../../components/buttons/NextButton';
import PictureUploadComponent from '../../../../components/pictureUpload';
import { setProfileUser } from '../../../../redux/actions/postProfile';
import { newUserAction } from '../../../../redux/actions/user';
import { createUserEmailPassword } from '../../../../services/auth';
import styles from './styles';

const PictureInput: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userPostProfile = useSelector((state: AppState) => state.profile);
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

  const handleCreateUser = async () => {
    console.log('end of profile flow');
    setProfileUser({ ...userPostProfile, pictures: pictureInput });
    const createdUser = await createUserEmailPassword(
      userPostProfile,
      pictureInput
    );
    if (typeof createdUser !== 'undefined' && typeof createdUser !== 'string') {
      console.warn('test dispatch: ', createdUser);
      // // update user state
      dispatch(newUserAction(createdUser));
    } else {
      console.log('Error creating user');
    }
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
                      imageShown={pictureInput}
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
            onPressHandler={handleCreateUser}
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
