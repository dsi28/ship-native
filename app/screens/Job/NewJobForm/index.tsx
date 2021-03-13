import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

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
      <Stack.Screen name="Step 1" component={Temp} />
      <Stack.Screen name="Step 2" component={Temp} />
      <Stack.Screen name="Step 3" component={Temp} />
      <Stack.Screen name="Preview Job Post" component={Temp} />
    </Stack.Navigator>
  );
}
