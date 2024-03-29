import React from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import NavigationLinkComponent from '../../../components/navigationLink';
import NavigationService from '../../../navigation/NavigationService';
import PostSignup from '../../PostSignup';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const CreateAccountScreen: React.FC = () => (
  // @ts-ignore default does exsist not sure why this show up
  // const userProfile = useSelector((state: AppState) => state.profile);
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.navLinkContainer}>
        <NavigationLinkComponent
          navigateTo="Login"
          textColor="white"
          linkText="Log In"
          linkDisabled={false}
        />
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome To</Text>
      </View>
      <View style={styles.shipContainer}>
        <Text style={styles.shipText}>Stork</Text>
        <Text style={styles.shipLetterText}>U</Text>
      </View>
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.pressableContainer}>
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
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>
          By pressing Continue or Create Account, I agree to StorkU&apos;s
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://storku.com/')}
          >
            Terms Of Service and Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  </View>
);
export default CreateAccountScreen;
