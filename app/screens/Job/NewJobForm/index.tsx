import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import NewJobS1 from './Step1Form';
import NewJobS2 from './Step2Form';

const Temp = () => (
  <View>
    <Text>Temp</Text>
  </View>
);

export default function NewJobForm() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'black',
        headerStyle: { backgroundColor: 'white' }
      }}
    >
      <Stack.Screen name="Step 1" component={NewJobS1} />
      <Stack.Screen name="Step 2" component={NewJobS2} />
      <Stack.Screen name="Step 3" component={Temp} />
      <Stack.Screen name="Preview Job Post" component={Temp} />
    </Stack.Navigator>
  );
}
