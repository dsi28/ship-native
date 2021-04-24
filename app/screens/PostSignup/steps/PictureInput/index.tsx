import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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
import styles from './styles';

const usersRef = firestore().collection('Users');

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
            onPressHandler={async () => {
              console.log('end of profile flow');

              dispatch(
                setProfileUser({ ...userPostProfile, pictures: pictureInput })
              );
              const authUser = await auth()
                .createUserWithEmailAndPassword(
                  userPostProfile.email,
                  userPostProfile.password
                )
                .then(() => {
                  console.log('User account created & signed in!');
                })
                .catch((error) => {
                  if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                  }
                  if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  }
                  console.error(error);
                });
              console.log('auth user', authUser, usersRef);
              // use uid to create user in firestore
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
