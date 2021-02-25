import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import NavigationService from '../../../navigation/NavigationService';
import PostSignup from '../../PostSignup';
import LoginScreen from '../Login';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const CreateAccountScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          // backgroundColor: 'pink',
          marginHorizontal: 15,
          marginTop: 10
        }}
      >
        <View style={{ alignItems: 'flex-end' }}>
          <Pressable
            onPress={() => {
              console.log('Login');
              NavigationService.navigate('Login', LoginScreen);
            }}
          >
            {({ pressed }) => (
              <Text
                style={{
                  opacity: pressed ? 0.8 : 1,
                  color: 'white',
                  fontSize: 20
                }}
              >
                Log In
              </Text>
            )}
          </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginTop: 70 }}>
          <Text style={{ color: 'white', fontSize: 20, opacity: 0.5 }}>
            Welcome To
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}>
            Ship
          </Text>
          <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 40 }}>
            X
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          flex: 1,
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
          paddingTop: 30
        }}
      >
        <View>
          <SocialIcon
            type="google"
            title="Sign In With Google"
            button
            onPress={() => console.log('sign in with google')}
            style={{ marginHorizontal: 20, height: 50 }}
          />
        </View>
        <View>
          <SocialIcon
            title="Sign In With Facebook"
            button
            type="facebook"
            onPress={() => console.log('sign in with facebook')}
            style={{ marginHorizontal: 20, height: 50 }}
          />
        </View>
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <Text style={{ color: 'gray' }}>OR</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Pressable
            style={({ pressed }) => [
              styles.pressableNext,
              {
                backgroundColor: pressed ? '#87CEEB' : '#87CEEB'
              }
            ]}
            onPress={() => {
              console.log('email');
              NavigationService.navigate('SignUp', PostSignup);
            }}
          >
            {({ pressed }) => (
              <Text
                style={{
                  opacity: pressed ? 0.8 : 1,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                Create Account with Email
              </Text>
            )}
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ color: 'gray', textAlign: 'center', fontSize: 15 }}>
            By pressing Continue or Create Account, I agree to ShipX&apos;s
            Terms Of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CreateAccountScreen;
