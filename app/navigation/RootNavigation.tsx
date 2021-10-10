import auth from '@react-native-firebase/auth';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import CreateAccountScreen from '../screens/Auth/CreateAccount';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';
import LoginScreen from '../screens/Auth/Login';
import PostSignup from '../screens/PostSignup';
import BottomTabsNav from './BottomTabNavigation';
import { navigationRef } from './NavigationService';

interface RootNavigatorProps {
  theme: Theme;
}

const Stack = createStackNavigator();

const RootNavigator: React.FC<RootNavigatorProps> = ({ theme }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  // TODO use model for this
  function onAuthStateChanged(firebaseUser: any) {
    console.warn('firebase auth: ', firebaseUser);
    setUser(firebaseUser);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccountScreen}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Forgot Password"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="SignUp"
              component={PostSignup}
              options={{
                headerShown: false
              }}
            />
          </>
        ) : (
          // User is signed in
          <Stack.Screen name="FlowStart" component={BottomTabsNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
