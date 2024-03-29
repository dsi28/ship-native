import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BirthdayInput from './steps/BirthdayInput';
import EmailInput from './steps/Email';
import NameInput from './steps/NameInput';
import PassInput from './steps/Pass';
import PictureInput from './steps/PictureInput';

export default function PostSignup() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#87CEEB',
        headerStyle: { backgroundColor: 'white' }
      }}
    >
      <Stack.Screen name="Name" component={NameInput} />
      <Stack.Screen name="Email" component={EmailInput} />
      <Stack.Screen name="Password" component={PassInput} />
      <Stack.Screen name="Birthday" component={BirthdayInput} />
      <Stack.Screen name="Picture" component={PictureInput} />
    </Stack.Navigator>
  );
}
