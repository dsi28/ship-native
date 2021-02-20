import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BirthdayInput from './steps/BirthdayInput';
import GenderInput from './steps/GenderInput';
import NameInput from './steps/NameInput';
import PictureInput from './steps/PictureInput';
import RoleInput from './steps/RoleInput';
import ShowMeInput from './steps/ShowMe';

export default function PostSignup() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: { backgroundColor: 'white' }
      }}
    >
      <Stack.Screen name="Name" component={NameInput} />
      <Stack.Screen name="Birthday" component={BirthdayInput} />
      <Stack.Screen name="Gender" component={GenderInput} />
      <Stack.Screen name="Role" component={RoleInput} />
      <Stack.Screen name="ShowMe" component={ShowMeInput} />
      <Stack.Screen name="Picture" component={PictureInput} />
    </Stack.Navigator>
  );
}
