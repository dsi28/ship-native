import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import PostSignup from '../screens/PostSignup';
import SellerProfileStack from '../screens/Profile/SellerProfile';
import UserProfile from '../screens/Profile/UserProfile';
import SellerBidsTabs from '../screens/SellerBids/tabNavigator';
import UserRequests from '../screens/UserRequest';
import { navigationRef } from './NavigationService';

interface RootNavigatorProps {
  theme: Theme;
}

const Stack = createStackNavigator();

const TempComponent = () => (
  <>
    <Text>test</Text>
  </>
);

const RootNavigator: React.FC<RootNavigatorProps> = ({ theme }) => (
  <NavigationContainer ref={navigationRef} theme={theme}>
    <Stack.Navigator>
      <Stack.Screen name="SellerBids" component={SellerBidsTabs} />
      <Stack.Screen name="UserRequests" component={UserRequests} />
      <Stack.Screen
        name="SellerProfile"
        component={SellerProfileStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={PostSignup}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen name="Home" component={TempComponent} />
      <Stack.Screen name="Notifications" component={TempComponent} />
    </Stack.Navigator>
    {/* button just to test ananymous sigin in after log out */}
    {/* <Button title="Sigin out" onPress={signUserOut} /> */}
  </NavigationContainer>
);

export default RootNavigator;
