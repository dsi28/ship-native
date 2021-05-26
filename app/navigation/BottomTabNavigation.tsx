import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../screens/Home';
import PayScreen from '../screens/Job/NewJobTrip';
import SellerProfileStack from '../screens/Profile/SellerProfile';
import SearchStack from '../screens/Search';

const PayScreenComponent = () => null;

const TempComponent = () => (
  <>
    <Text>test</Text>
  </>
);

const Tab = createBottomTabNavigator();

function BottomTabsNav() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="BottomSheet"
        component={PayScreenComponent}
        options={{
          tabBarButton: () => <PayScreen />
        }}
      />
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
        component={SellerProfileStack}
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
export default BottomTabsNav;
