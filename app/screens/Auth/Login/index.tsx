import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const LoginScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{ alignItems: 'flex-end' }}>
          <Pressable
            onPress={() => {
              console.log('create Account');
              NavigationService.navigate('Login', LoginScreen);
            }}
          >
            {({ pressed }) => (
              <Text
                style={{
                  opacity: pressed ? 0.8 : 1,
                  color: 'black',
                  fontSize: 20
                }}
              >
                Create Account
              </Text>
            )}
          </Pressable>
        </View>
        <View>
          <Text style={styles.headerText}>Log In</Text>
        </View>
        <View>
          <View>
            <View>
              <Text>Email Address</Text>
            </View>
            <View>
              <TextInput />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
