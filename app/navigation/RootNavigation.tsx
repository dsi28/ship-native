import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PostSignup from '../screens/PostSignup';
import SellerBidsTabs from '../screens/SellerBids/tabNavigator';
import UserRequests from '../screens/UserRequest';
import BottomTabsNav from './BottomTabNavigation';
import { navigationRef } from './NavigationService';

interface RootNavigatorProps {
  theme: Theme;
}

const Stack = createStackNavigator();

const RootNavigator: React.FC<RootNavigatorProps> = ({ theme }) => (
  <NavigationContainer ref={navigationRef} theme={theme}>
    <Stack.Navigator>
      <Stack.Screen name="FlowStart" component={BottomTabsNav} />
      <Stack.Screen name="SellerBids" component={SellerBidsTabs} />
      <Stack.Screen name="UserRequests" component={UserRequests} />

      <Stack.Screen
        name="SignUp"
        component={PostSignup}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
