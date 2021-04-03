import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NewJobConfirm from './ConfirmJob';
import NewJobS1 from './Step1Form';
import NewJobS2 from './Step2Form';
import NewJobS3 from './Step3Form';

export default function NewJobForm() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: true,
        headerTintColor: 'black',
        headerStyle: { backgroundColor: 'white' }
      }}
    >
      <Stack.Screen name="Step 1" component={NewJobS1} />
      <Stack.Screen name="Step 2" component={NewJobS2} />
      <Stack.Screen name="Step 3" component={NewJobS3} />
      <Stack.Screen name="Preview Job Post" component={NewJobConfirm} />
    </Stack.Navigator>
  );
}
