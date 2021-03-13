import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ItemComponent from '../../components/home/ItemComponent';
import NavigationService from '../../navigation/NavigationService';
import AcceptTravler from '../Job/AcceptRequest';
import DeclineTravler from '../Job/DeclineRequest';
import JobItem from '../Job/JobItem';
import NewJobForm from '../Job/NewJobForm';
import ProfileReviews from '../Profile/Reviews';
import TravelerRequests from '../Travelers/Requests';
import TravelerScreen from '../Travelers/TravelerScreen';
import styles from './styles';

const HomeScreenTab: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  const pressItemHandler = () => {
    console.log('item pressed');
    NavigationService.navigate('Job', JobItem);
  };
  return (
    <ScrollView style={{ backgroundColor: '#f3f5fa' }}>
      <View style={styles.container}>
        <ItemComponent onPressHandler={pressItemHandler} />
      </View>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

function HomeScreenTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'lightgray',
        labelStyle: { fontSize: 17, fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: '#e91e63' },
        style: { backgroundColor: 'white' }
      }}
    >
      <Tab.Screen
        name="Sender"
        component={HomeScreenTab}
        options={{ tabBarLabel: 'Sender' }}
      />
      <Tab.Screen
        name="Traveler"
        component={HomeScreenTab}
        options={{ tabBarLabel: 'Traveler' }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const HomeStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      options={{ headerTitle: 'Home' }}
      component={HomeScreenTabs}
    />
    <Stack.Screen name="Job" component={JobItem} />
    <Stack.Screen name="Traveler Requests" component={TravelerRequests} />
    <Stack.Screen name="View Traveler" component={TravelerScreen} />
    <Stack.Screen name="Traveler Reviews" component={ProfileReviews} />
    <Stack.Screen name="Accept Traveler" component={AcceptTravler} />
    <Stack.Screen name="Decline Traveler" component={DeclineTravler} />
    <Stack.Screen name="New Job" component={NewJobForm} />
  </Stack.Navigator>
);

export default HomeStack;
