import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import SellerBids from '..';

const Tab = createMaterialTopTabNavigator();

function SellerBidsTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'turquoise',
        inactiveTintColor: 'lightgray',
        labelStyle: { fontSize: 17, fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: 'turquoise' },
        style: { backgroundColor: 'white' }
      }}
    >
      <Tab.Screen
        name="Feed"
        component={SellerBids}
        options={{ tabBarLabel: 'New Bids' }}
      />
      <Tab.Screen
        name="Notifications"
        component={SellerBids}
        options={{ tabBarLabel: 'Accepted' }}
      />
    </Tab.Navigator>
  );
}
export default SellerBidsTabs;
