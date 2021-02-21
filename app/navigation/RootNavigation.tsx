import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostSignup from '../screens/PostSignup';
import SellerProfileStack from '../screens/Profile/SellerProfile';
import UserProfile from '../screens/Profile/UserProfile';
import SellerBidsTabs from '../screens/SellerBids/tabNavigator';
import UserRequests from '../screens/UserRequest';
import { navigationRef } from './NavigationService';

const TempComponent = () => (
  <>
    <Text>test</Text>
  </>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63'
      }}
    >
      <Tab.Screen
        name="Feed"
        component={TempComponent}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={TempComponent}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="New"
        component={TempComponent}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color="#e91e63"
              size={size * 2}
            />
          ),
          tabBarLabel: () => null
        }}
      />
      {/*
      https://stackoverflow.com/questions/59304281/create-custom-bottom-tab-navigator-in-react-native
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 34,
                borderWidth: 4,
                borderColor: color,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <MaterialCommunityIcons
                name="plus-circle-outline"
                color={color}
                size={68}
              />
            </View>
          )
        }}
        component={TempComponent}
      /> */}
      <Tab.Screen
        name="Chat"
        component={TempComponent}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TempComponent}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

interface RootNavigatorProps {
  theme: Theme;
}

const Stack = createStackNavigator();

const RootNavigator: React.FC<RootNavigatorProps> = ({ theme }) => (
  <NavigationContainer ref={navigationRef} theme={theme}>
    <Stack.Navigator>
      <Stack.Screen name="FlowStart" component={MyTabs} />
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
