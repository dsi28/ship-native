import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CreateAccountScreen from '../screens/Auth/CreateAccount';
import LoginScreen from '../screens/Auth/Login';
import PostSignup from '../screens/PostSignup';
import BottomTabsNav from './BottomTabNavigation';
import { navigationRef } from './NavigationService';

interface RootNavigatorProps {
  theme: Theme;
}

const Stack = createStackNavigator();

const RootNavigator: React.FC<RootNavigatorProps> = ({ theme }) => (
  <NavigationContainer ref={navigationRef} theme={theme}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="FlowStart" component={BottomTabsNav} />
      {/* <Stack.Screen name="SellerBids" component={SellerBidsTabs} />
      <Stack.Screen name="UserRequests" component={UserRequests} /> */}

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
