import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../screens/Home';
import NewJobTrip from '../screens/Job/NewJobTrip';
import SellerProfileStack from '../screens/Profile/SellerProfile';

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
        name="Feed"
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
        component={TempComponent}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        // name="New"
        // component={NewJobTrip}
        // options={{
        //   tabBarIcon: ({ size }) => (
        //     <MaterialCommunityIcons
        //       name="plus-circle"
        //       color="#e91e63"
        //       size={size * 2}
        //     />
        //   ),
        //   tabBarLabel: () => null
        // }}
        name="BottomSheet"
        component={PayScreenComponent}
        options={{
          // tabBarIcon: ({ size }) => (
          //   <MaterialCommunityIcons
          //     name="plus-circle"
          //     color="#e91e63"
          //     size={size * 2}
          //   />
          // ),
          // tabBarLabel: 'test',
          // tabBarLabel: () => null,
          tabBarButton: () => <NewJobTrip />
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
        component={SellerProfileStack}
        // component={UserProfile}
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
