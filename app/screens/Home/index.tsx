import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ItemComponent from '../../components/home/ItemComponent';
import { IJob } from '../../models/IJob';
import NavigationService from '../../navigation/NavigationService';
import { AppState } from '../../redux/store/configureStore';
import AcceptTravler from '../Job/AcceptRequest';
import DeclineTravler from '../Job/DeclineRequest';
import JobItem from '../Job/JobItem';
import NewJobForm from '../Job/NewJobForm';
import ProfileReviews from '../Profile/Reviews';
import TravelerRequests from '../Travelers/Requests';
import TravelerScreen from '../Travelers/TravelerScreen';
import styles from './styles';

interface HomeInputProps {
  jobList: [] | IJob[];
  jobType: string;
}

const HomeScreenTab: React.FC<HomeInputProps> = ({ jobList, jobType }) => {
  console.log('job list', jobList);
  const pressItemHandler = (job: IJob) => {
    console.log('item pressed');
    NavigationService.navigate('Job', job);
  };
  return (
    <ScrollView style={{ backgroundColor: '#f3f5fa' }}>
      <View style={styles.container}>
        {/* @ts-ignore */}
        {jobList.map((jobItem: IJob) => (
          <ItemComponent
            jobItem={jobItem}
            onPressHandler={pressItemHandler}
            key={jobItem.itemName + jobType}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

function HomeScreenTabs() {
  const jobState = useSelector((state: AppState) => state.job);
  console.log('job state', jobState.ownerJobs, 'FULL');
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
      <Tab.Screen name="Sender" options={{ tabBarLabel: 'Sender' }}>
        {() => (
          // @ts-ignore
          <HomeScreenTab jobList={jobState.ownerJobs} jobType="Owner" />
        )}
      </Tab.Screen>
      <Tab.Screen name="Traveler" options={{ tabBarLabel: 'Traveler' }}>
        {() => (
          // @ts-ignore
          <HomeScreenTab jobList={jobState.ownerJobs} jobType="Owner" />
        )}
      </Tab.Screen>
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
    <Stack.Screen
      name="New Job"
      component={NewJobForm}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HomeStack;
